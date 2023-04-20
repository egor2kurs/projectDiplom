const uuid = require('uuid')
const path = require('path')
const {Work, WorkInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class WorkController{
    async create(req, res, next){
       try{
        let {name, salary, categoryId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const work = await Work.create({name, salary, categoryId, img: fileName});
        
        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                WorkInfo.create({
                    title: i.title,
                    description: i.description,
                    workId: work.id
                })
            )
        }

        return res.json(work)
       } catch (e) {
        next(ApiError.badRequest(e.message))
    }
    }

    async getAll(req,res){ //фильтрация не работает
        const{categoryId} = req.body
        let works;
        if(!categoryId){
            works = await Work.findAll()
        }
        if(categoryId){
            works = await Work.findAll({where:{categoryId}})
        }
        return res.json(works)
    }

    async getOne(req,res){
        const {id} = req.params
        const work = await Work.findOne(
            {
                where: {id},
                include: [{model: WorkInfo, as: 'info'}]
            },
        )
        return res.json(work)
    }

}

module.exports = new WorkController() 
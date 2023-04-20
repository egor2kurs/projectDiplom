const Router = require('express')
const router = new Router()
const workController = require('../controllers/workController')


router.post('/', workController.create)
router.get('/', workController.getAll)
router.get('/:id', workController.getOne)


module.exports = router
const sequelize = require('../db')
const{DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING , unique:true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const BasketWork = sequelize.define('basket_work',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Work = sequelize.define('work',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false},
    salary:{type:DataTypes.INTEGER, allowNull: false},
    description:{type:DataTypes.STRING, allowNull:true},
    img:{type:DataTypes.STRING, allowNull:false},
    address:{type:DataTypes.STRING, allowNull:true},
})

const WorkInfo = sequelize.define('work_info',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type:DataTypes.STRING, allowNull: false},
    description:{type:DataTypes.STRING, allowNull: false},
})

const Category = sequelize.define('category',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketWork)
BasketWork.belongsTo(Basket)

Work.hasMany(BasketWork)
BasketWork.belongsTo(Work)

Work.hasMany(WorkInfo, {as:'info'})
WorkInfo.belongsTo(Work)

Category.hasMany(Work)
Work.belongsTo(Category)



module.exports = {
    User,
    Basket,
    BasketWork,
    Work,
    WorkInfo,
    Category
}
const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const workRouter = require('./workRouter')
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',checkRole('ADMIN'),categoryController.create)
router.get('/', categoryController.getAll)

module.exports = router
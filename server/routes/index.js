const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const workRouter = require('./workRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/work', workRouter)
router.use('/category', categoryRouter)

module.exports = router
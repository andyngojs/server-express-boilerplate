import {Router} from 'express'

export const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send('this is a path of api')
})

userRouter.get('/user', (req, res) => {
  res.send('this is a path of apiUser')
})

import {userRouter} from './userRoute'

export function apiRouter(app) {
  app.use('/apiUser', userRouter)
}

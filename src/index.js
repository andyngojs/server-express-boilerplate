import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
// config
import {corsOptions} from '~/config/corsConfig'
// routes
import {apiRouter} from './routes'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// Using Cors to allow some specific origins (other domains) request to server.
app.use(cors(corsOptions))
// Using helmet
app.use(helmet())
// Using Morgan to log all requests
app.use(morgan('combined'))

// apiRouter to manage all routers of api
apiRouter(app)

app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME, () => {
  console.log(
    `Server is running at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`,
  )
})

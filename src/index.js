import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    name: 'dongnb',
    age: 23,
    job: 'software Engineer',
  })
})

app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME, () => {
  console.log(
    `Server is running at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`,
  )
})

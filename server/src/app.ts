import express, {type Express} from 'express'
import helloRouter from './routes/HelloWorldRoute.js'

const app:Express = express()
app.use(express.json())

app.use('/hello', helloRouter)

export default app;
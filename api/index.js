import 'dotenv/config.js'
import express from 'express' 
import cors from 'cors'
import controller from './controller/controller.js'

const server = express()
server.use = (cors());
server.use(express.json());
server.use(controller)




server.listen (process.env.PORT,() => console.log(`API conectado na porta ${process.env.port}`))
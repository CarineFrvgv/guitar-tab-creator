import express, {Express,NextFunction, Request, Response} from 'express'
import {user} from './routes'



const api: Express = express();



api.use('/users', user);

api.get('/auth/register')


api.get('/', (req:Request, res: Response)=>{
  res.send('api');
})


export default api;
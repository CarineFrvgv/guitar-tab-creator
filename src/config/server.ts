import express, {Express, Request, Response} from "express";
import { DBConnection } from '../db';
import { PORT } from './config'

const app: Express = express();

app.use(express.json());

// routers
import apiRouter from '../api'
app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response)=>{
  res.send('running')
})

app.listen(PORT, async() => {
  await DBConnection()
  console.log(`server running on http://localhost:${PORT}`)
});
import express, {Express, Request, Response} from "express";
import db, { DBConnection } from '../db';



const PORT= process.env.PORT || 3000
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
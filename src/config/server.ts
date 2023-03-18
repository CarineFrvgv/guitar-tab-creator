import express, {Request, Response} from "express";
import db from '../db';

const PORT= process.env.PORT || 3000

db.sync().then(()=>{console.log('connect to db')})

const app = express();

app.get('/', (req: Request, res: Response)=>{
  res.send('running')
})

app.listen(PORT, () => 
  console.log(`server running on http://localhost:${PORT}`)
);
import express, {Express, Request, Response} from "express";
import db from '../db';

db.authenticate().then(()=>{console.log('connect to db')})

//---

const PORT= process.env.PORT || 3000
const app: Express = express();

app.use(express.json());

// routers
import apiRouter from '../api'
app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response)=>{
  res.send('running')
})

app.listen(PORT, () => 
  console.log(`server running on http://localhost:${PORT}`)
);
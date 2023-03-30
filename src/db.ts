import { Sequelize } from "sequelize";

const db = new Sequelize('app', '','',{
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
})

try{
  db.sync().then(()=>{
    console.log(`All models are in sync`)
  })
}
catch(err){
  console.log(``)
}

export default db;
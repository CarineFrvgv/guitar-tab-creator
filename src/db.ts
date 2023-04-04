import {Sequelize} from "sequelize";

const sequelize = new Sequelize('app', '','',{
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false
})

// export const dbSync = ()=>{
//   try{
//     db.sync().then(()=>{
//       console.log(`All models are in sync`)
//     })
//   }
//   catch(err){
//     console.log(err)
//   }
// }

export default sequelize;
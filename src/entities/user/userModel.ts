// import db from "../../db";
import db from '../../db'
import { Model, DataTypes, InferAttributes } from "sequelize";



class User extends Model<InferAttributes<User>> {
  declare id?: number
  declare name: string
  declare email: string
  declare password: string
  // declare token: string
  // declare date_of_birth: Date
}

User.init({
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // token: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  // date_of_birth:{
  //   type: DataTypes.DATEONLY,
  //   allowNull: false,
  // }

},{
  sequelize: db,
  freezeTableName: true
  // modelName: 'user'
})

User.sync({alter: true})


// export const getUsers = async (addFilter:boolean, filter?:string)=>{

//   return await User.findAll();
// }

export default User;
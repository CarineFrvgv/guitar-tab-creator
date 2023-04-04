import User from "./userModel"
import bcrypt from 'bcrypt'

export interface IUser{
  name: string
  email: string
  password: string
}

export interface apiResponse{
  success: boolean,
  error?: boolean,
  message?: string
}

export async function getUserBy(field: string, value:string){
  return await User.findOne({ where: {[field]: value }});
}

export async function getAllUsers(filter:boolean, attributes?:object){
  if(filter == true && attributes){
    return await User.findAll(attributes);
  }
  return await User.findAll();
}





export async function isEmailValid(email:string):Promise<apiResponse>{
  let emailInUse = await getUserBy('email', email)

  if (emailInUse){
    return {success: false, message: 'email already in use.'}
  }
  else{
    return {success: true}
  }
}

export function isPasswordValid(password:string):apiResponse{
  return {success:false, message: 'password needs to be funny'}
}

export async function hashPassword(password:string):Promise<string>{
  return await bcrypt.hash(password, 8);
}



export const getUsers = async () =>{
  
  // try{
  //   var users = await User.findAll({
  //     attributes
  //   })
  //   return users

  // }catch(err){
  // }
}


export async function registerUser(params: IUser):Promise<apiResponse>{
    let validEmailRes = await isEmailValid(params.email)
    let validPasswordRes = isPasswordValid(params.password)

    if(validEmailRes.success && validPasswordRes.success){
      params.password = await hashPassword(params.password)

      try{
        await User.create(params)
      }
      catch(err){
        console.log(err)
        return {success:false, error: true}
      }

      return {success: true}
    }
    if(!validEmailRes.success){
      return validEmailRes
    }
    if(!validPasswordRes.success){
      return validPasswordRes
    }
    else{
      return {success: false, message: `${validEmailRes.message}, ${validPasswordRes.message}`}
    }
}

type loginType = {
  email:string,
  password: string
}

export async function loginUser(params: loginType){
  return 'not implemented yet'
}
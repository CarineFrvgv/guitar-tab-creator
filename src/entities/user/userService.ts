export interface IUser{
  name: string
  email: string
  password: string
}

interface IUserService{
  getAllUsers(filterAttributes:boolean, attributes?:object):Promise<User[]>,
  getUser(field:string, value:string):Promise<User|null>
}

// export interface apiResponse{
//   success: boolean,
//   error?: boolean,
//   message?: string
// }

interface IPassHasher{
  hash(password:string):Promise<string>
}


import User from "./userModel"
import bcrypt from 'bcrypt'


export class UserService implements IUserService{
  private passHasher:IPassHasher

  constructor(passHasher:IPassHasher) {
    this.passHasher = passHasher;
  }

  public async createUser(user:IUser):Promise<User|never>{
    try {
      return await User.create(user);
    } 
    catch (error) {
      throw new Error(`error UserService.createUser ${error}`)
    }
  }

  public async getAllUsers(filterAttributes:boolean, attributes?:object):Promise<User[]>{

    if(filterAttributes == true && attributes){
        return await User.findAll(attributes);
    }

    return await User.findAll();      
  }

  public async getUser(field:string, value:string):Promise<User | null>{
    return await User.findOne({ where: {[field]: value }});
  }

  public async validateUserCredentials(user:IUser): Promise<{user?:User, valid:boolean, message?:string}>{
    let validEmail = await this.isEmailValid(user.email)
    let validPassword = this.isPasswordValid(user.password)

    if(validEmail && validPassword){
      user.password = await this.hashPassword(user.password)

      try {
        const userCreated = await this.createUser(user)
        return {user: userCreated, valid:true};

      } catch (error) {
        console.log(error)
        return {valid:false, message: 'internal error'};
      }


    }


    if(!validPassword){
      return {valid: false, message:'password is not valid'}
    }
    if(!validEmail){
      return {valid: false, message:'email is not valid'}
    }
    else{
      return {valid: false, message:'creadentials are not valid'}
    }


    //   try{
    //     await User.create(params)
    //   }
    //   catch(err){
    //     console.log(err)
    //     return {success:false, error: true}
    //   }

    //   return {success: true}
    // }
    // if(!validEmailRes.success){
    //   return validEmailRes
    // }
    // if(!validPasswordRes.success){
    //   return validPasswordRes
    // }
    // else{
    //   return {success: false, message: `${validEmailRes.message}, ${validPasswordRes.message}`}
    // }  
  }


  private isPasswordValid(password:string):boolean{
    const strongPasswordRegex = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/
    const STRONG_PASSOWRD_SIZE = 6
    
    if(password.length >= STRONG_PASSOWRD_SIZE && password.match(strongPasswordRegex)) {
      return true
    }
    else{
      return false
    }
  }

  private async isEmailValid(email:string):Promise<boolean>{
    let emailInUse = await this.getUser('email', email)

    if(emailInUse){
      return false
      // throw new Error('email is in use')
    }

    return true
    // return false
  }

  private async hashPassword(password:string):Promise<string>{
    return await this.passHasher.hash(password);
  }


}


class BcryptHasher implements IPassHasher{
  public async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }
}


const bcriptHasher = new BcryptHasher()
const userService = new UserService(bcriptHasher)
export default userService







// export async function isEmailValid(email:string):Promise<apiResponse>{
//   let emailInUse = await getUserBy('email', email)

//   if (emailInUse){
//     return {success: false, message: 'email already in use.'}
//   }
//   else{
//     return {success: true}
//   }
// }

// export function isPasswordValid(password:string):apiResponse{


  // , message: 'password needs to have alphanumeric and special characters and needs to be longer than 6,'
// }

// }
// export



// export const getUsers = async () =>{
  
//   // try{
//   //   var users = await User.findAll({
//   //     attributes
//   //   })
//   //   return users

//   // }catch(err){
//   // }
// }


// export async function validateUserCredentials(params: IUser):Promise<apiResponse>{
//     let validEmailRes = await isEmailValid(params.email)
//     let validPasswordRes = isPasswordValid(params.password)

//     if(validEmailRes.success && validPasswordRes.success){
//       params.password = await hashPassword(params.password)

//       try{
//         await User.create(params)
//       }
//       catch(err){
//         console.log(err)
//         return {success:false, error: true}
//       }

//       return {success: true}
//     }
//     if(!validEmailRes.success){
//       return validEmailRes
//     }
//     if(!validPasswordRes.success){
//       return validPasswordRes
//     }
//     else{
//       return {success: false, message: `${validEmailRes.message}, ${validPasswordRes.message}`}
//     }
// }


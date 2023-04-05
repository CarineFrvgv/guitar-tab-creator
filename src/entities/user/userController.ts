import UserService from "./userService"
import { Request, Response } from 'express';


type loginType = {
  email:string,
  password: string
}

export async function loginUser(params: loginType){
  return 'not implemented yet'
}

export const registerUser = async (req:Request, res:Response): Promise<void> =>{
  const {name, email, password} = req.body

  if(name && email && password){
    UserService.validateUserCredentials({name, email, password}).then((response)=>{
      const {user, valid, message} = response

      if (valid && user){
        res.status(200).send(
          {
            success:true, 
            user:{
              name:user.name,
              email:user.email
            }
          }
        );
      }
      else{
        // response
        if( message){
          res.status(400).send(JSON.stringify({success:false, message}))
        }
        else{
          res.status(400).send(JSON.stringify({success:false}))
        }


        // response.error ? 
          // res.status(500).send(JSON.stringify({success:false, message: 'internal server error, try again later.'}))
        // :
      }
    })
  }
  else{
    res.status(400).send({success: false, message: 'request needs: name, email and password'})
  }
}
  
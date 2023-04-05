import express, {Express, Request, Response} from 'express'
import { registerUser } from './userController';
// import { getAllUsers, getUserBy, registerUser } from './userController';

const user:Express = express();

user.get('/', async (req:Request, res:Response)=>{
  res.send({message: 'mock'})
  // try{
  //   const users = await getAllUsers(true, {attributes: ['name', 'email']})
  //   res.status(200).send(JSON.stringify(users));
  // }catch(err){
  //   console.log(err)
  // }

})

user.post('/register', registerUser)

user.get('/:id', async (req:Request, res:Response)=>{
  // res.send(req.params.id)
  // const user = await getUserBy('id', req.params.id)
  // if(user){
  //   res.status(200).send(JSON.stringify({
  //     name: user.name,
  //     emali: user.email,
  //     songs: {
  //       title: 'this is me',
  //       key: 'a major',
  //       bpm: 127,
  //       time_sig: '3/4'
  //     }
  //   }))

  // }
  // else{
  //   res.status(404).send('user not found.')
  // }
  // res.send('get user by id')
})



// user.post('/', (req:Request, res:Response)=>{
//   const {name, email, password} = req.body;

//   let error=false
//   let errorBody = 'request is missing: '

//   if (name == undefined){
//     error = true
//     errorBody = errorBody + 'name '
//   }

//   if (email == undefined){
//     error = true
//     errorBody = errorBody + 'email '

//     // res.status(400).send('request is missing: email').end()
//   }

//   if (password == undefined){
//     error = true
//     errorBody = errorBody + 'password '
//   }

//   if (error){
//     res.status(400).send(errorBody).end()
//   }




//   res.status(200).send(JSON.stringify({
//     email,
//     password,
//     name,
//   }))







  

//   // if (name == undefined){
//   //   res.send('request need a name param')
//   // }

//   // res.send('post user by id')
// })

export default user;
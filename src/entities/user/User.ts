export interface IUser{
  id:number;
  name:string;
  email:string;
  password:string;
}

export class User {
  public id:number;
  public name:string;
  public email:string;
  public password:string;

  constructor(id:number, name:string, email:string, password: string){
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}




// function validateUserName(name: string){
//   if(name.length<3){
//     return {success: false, message: 'name has to be longer.'}
//   }
// }



// export class User {
//   private _name: string
//   private _email: string
//   private _password: string
//   private _token: string

//   constructor(props: IUser) {
//     this.name = props.name
//     this.email = props.email
//     this.password = props.password
//   }

//   public getUser():IUser{
//     return {
//       name: this.name,
//       email: this.email,
//       password: this.password
//     }
//   }

//   public get name():string{
//     return this._name
//   }

//   public set name(name:string){
//     if (name.length<3){
//       throw new Error('name has to be longer')
//     }
//     this._name = name
//   }

//   public get email():string{
//     return this._email;
//   }

//   public set email(email:string){
    

//   // private validateEmail(email: string):boolean{
//   //   // tem que ser unico no banco
//   //   return true  
//   // }

//   public get password():string {
//     return this._password
//   }

//   public set password(password:string){
//     let passwordIsValid = this.validatePassword(password)

//     if (passwordIsValid){
//       this._password = this.generatePassHash(password) ;
//     }
//     else{
//       throw new Error('password not valid')
//     }
//   }

//   private validatePassword(password: string):boolean{

//     // has to have
//     // at least 9 caracters
//     // letras maiusculas
//     // letras minusculas
//     // numeros
//     // caracteres
//     return true
//   }

//   private generatePassHash(password: string): string{
//     let passHash = bcrypt.hashSync(password, 8);
//     console.log(passHash)
//     return passHash
//   }
// }

// interface UserInterface {
//   id: number
//   name: string
//   email: string
//   password: string
//   // dataOfBirth: Date
// }

// console.log(dom.email)
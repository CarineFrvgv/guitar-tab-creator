import { User } from "./User";

export interface IUserRepository{
  getAll(): Promise<User[]>
  getById(id:string): Promise<User | null>
  getBy(field:string, fieldValue:string): Promise<User | null>
  updade(id:number, user:User): Promise<User>
  delete(id:number): Promise<void>
  create(user:User): Promise<void>
}

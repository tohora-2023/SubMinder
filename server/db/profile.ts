import connection from "./connection";
import { User } from "../../models/userProfile";

export function getUser(userName: string, db = connection): Promise<User> {
  return db<User>('users')
  .where({userName})
  .select('id', 'firstName', 'lastName','userName', 'image')
}
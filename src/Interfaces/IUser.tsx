import { IEntity } from "./IEntity";

export interface IUser extends IEntity {
  name: string;
  identification: string;
  email: string;
  password: string;
}

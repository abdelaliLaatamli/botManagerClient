import { User } from './user';

export interface Pages {

  id : number
  name : string
  verify_tocken : string
  access_upload_tocken : string
  // access_upload_tocken : Text
  app_secret : string
  // user : User
  user : number
  createdAt? : Date
  updatedAt? : Date

}

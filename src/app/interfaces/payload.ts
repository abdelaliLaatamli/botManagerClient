import { Pages } from './pages';

export interface Payload {

    id : number
    name : string
    payload : string
    PageId : number
    th_day ? : number
    Page ? : Pages
    createdAt ? : string
    updatedAt ? : string

}

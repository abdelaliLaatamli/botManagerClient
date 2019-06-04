import { Injectable } from '@angular/core';
import { Pages } from 'src/app/interfaces/pages';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudHelpersService {

  public page : Pages = {
    id : null,
    name : '' ,
    verify_tocken : '',
    access_upload_tocken : '' ,
    app_secret : '',
    user : null
  }


  pages

  formActive : boolean = false

  operation : string

  constructor( public http : HttpClient , public authService : AuthService) { }

  resetForm() {
    this.page = {
      id : null,
      name : '' ,
      verify_tocken : '',
      access_upload_tocken : '' ,
      app_secret : '',
      user : null
    }
  }



}

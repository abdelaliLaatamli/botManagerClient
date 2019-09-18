import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pages } from 'src/app/interfaces/pages';
import { CrudHelpersService } from 'src/app/services/crud-helpers/crud-helpers.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  // page : Pages

  // operation : string

  user : User

  constructor( public http : HttpClient , public crudservice : CrudHelpersService , public auth : AuthService , public pageComponent : PagesComponent ) { }

  ngOnInit() {
  }


  risetForm( form? : NgForm ){
    //form.resetForm();
    // this.crudservice.page = {
    //   id : null,
    //   name : '' ,
    //   verify_tocken : '',
    //   access_upload_tocken : '' ,
    //   app_secret : '',
    //   user : null
    // }

  }

  save(){
    // console.log( this.crudservice.page )

    this.user = this.auth.getUser()
    this.crudservice.page.user = this.user.id

      if( this.crudservice.operation == "add" ){
          // console.log( this.crudservice.page.id )
          let idTemp = this.crudservice.page.id
          this.http.post( environment.apiUrl +"page" , this.crudservice.page )
                    .subscribe(
                          ( data : any )  =>
                              { if ( data.pageID == idTemp ) this.pageComponent.allPages() } ,
                              err => console.log( err )
                    )
      }

      if( this.crudservice.operation == "edit" )
          this.http.put(  environment.apiUrl +"page" , this.crudservice.page ).subscribe( data => console.log( data ) , err => console.log( err ) )

      this.crudservice.formActive = false
      this.crudservice.resetForm()

      //this.crudservice.formActive = false
  }

  disableForm(){
    this.crudservice.resetForm()
    this.crudservice.formActive = false
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Pages } from 'src/app/interfaces/pages';
import { CrudHelpersService } from 'src/app/services/crud-helpers/crud-helpers.service';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages

  // formActive : boolean = false

  constructor(private http : HttpClient , public crudService : CrudHelpersService , public authService : AuthService ) { }

  ngOnInit() {

    // const base = this.http.get( environment.apiUrl+"page" ,
    //                           { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
    //                           ).subscribe( datacames => { this.pages = datacames ; console.log( datacames ) }  , err => console.log( err ) )
  //   return this.http.get(environment.apiUrl+"user/profile" ,
  //   { headers : {  Authorization : `${this.getToken()}` }
  // })

      this.allPages()

  }

  allPages(  ){
    this.pages = []
    const base = this.http.get( environment.apiUrl+"page" ,
                              { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
                              ).subscribe(
                                            datacames => { this.pages = datacames }  ,
                                            err => console.log( err )
                              )

  }

  edit(item:Pages){
   // console.log( item )
    this.crudService.resetForm()
    this.crudService.formActive = true
    this.crudService.page = item
    this.crudService.operation = "edit"
  }

  delete(item:Pages){
    // console.log( item )

    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      this.http.delete( environment.apiUrl+`page/${item.id}`  )
              .subscribe( ( datacames : any ) =>
                              { if( datacames.data == "removed" ) this.allPages() }  ,
                              err => console.log( err )
              )
    }


  }

  add(){
    this.crudService.resetForm()
    this.crudService.formActive = true
    this.crudService.operation = "add"
  }


  substr( str : string ) : string { return str.substr( 0 , 10)+"..."+str.substr( str.length-10 , str.length ) }


}

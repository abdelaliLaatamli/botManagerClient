import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserTest } from 'src/app/interfaces/user-test';

@Component({
  selector: 'app-send-test',
  templateUrl: './send-test.component.html',
  styleUrls: ['./send-test.component.css']
})
export class SendTestComponent implements OnInit {

  // formAdd : boolean

  testUsers : [ UserTest ]

  operation=null

  userTest : UserTest = {

    name : "" ,
    context : "" ,
    sander_id : "" ,
    player_id : "" ,
    UserId : 0

  }

  constructor( private http : HttpClient , private authService : AuthService ) { }

  ngOnInit() {
    // this.formAdd = false;
    this.getAll()
    this.userTest.UserId = this.authService.getUser().id
  }


  getAll() {
    // sendtst
    // console.log( this.authService.getUser().id )
    this.testUsers=null
    this.http.get( environment.apiUrl+"sendtst" ,
                  { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
              ).subscribe( ( send : [ UserTest ] ) => { this.testUsers = send  } , err => console.log( err ) )
  }

  addUser(){


      if( this.operation == "add" ){
          this.http.post( environment.apiUrl+"sendtst" , this.userTest )
              .subscribe( sub => {  this.getAll() ;
                  this.userTest = {
                    name : "" ,
                    context : "" ,
                    sander_id : "" ,
                    player_id : "" ,
                    UserId : 0
                  }
            } , err => console.log( err ) );
      }

      else if( this.operation =="edit" ){

          this.http.put( environment.apiUrl+"sendtst" , this.userTest )
                    .subscribe( data => {

                      this.userTest = {
                        name : "" ,
                        context : "" ,
                        sander_id : "" ,
                        player_id : "" ,
                        UserId : 0
                        }
                    } , err => console.log( err ) )

      }


      this.operation = null
  }


  deleteItem( userData ){
      // console.log( userData )

      this.http.delete( environment.apiUrl+"sendtst/"+userData.id )
                .subscribe(data => { this.getAll() } , err => console.log( err ) )


  }


  editItem( testUser : UserTest ){
      // console.log( testUser )

      this.operation="edit"
      this.userTest = testUser
  }
  // edit(  )

}

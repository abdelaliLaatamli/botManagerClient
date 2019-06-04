import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Pages } from 'src/app/interfaces/pages';
import { Payload } from 'src/app/interfaces/payload';
import { UserTest } from 'src/app/interfaces/user-test';

interface responnce {
    msg : string ,
    status_code : number ,
    error? : any
    body? : any
}


@Component({
  selector: 'app-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.css']
})
export class PayloadComponent implements OnInit {

  pages

  selectedPage : Pages

  payloads : [ Payload ]

  payloadSelected : Payload

  payloadinSelected : any

  operation : string

  testUsers : [ UserTest ]

  selectedObj = "Choose player"

  alerts



  constructor( public http : HttpClient , public  authService : AuthService ) { }

  ngOnInit() {

    this.getPages()
    this.getAlluserTest()

  }

  sendtest( payload : Payload){
    // console.log( payload )

    this.http.post( environment.apiUrl+"sendtst/make/send" ,
                      { payload : payload , testPlayer : this.selectedObj , Page : this.selectedPage } )
              .subscribe( ( data : responnce ) => { this.alerts = data  } , err => console.log( err ) )

  }

  getPages(){

    this.http.get( environment.apiUrl+"page" ,
                                { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
                                ).subscribe(
                                              datacames => { this.pages = datacames }  ,
                                              err => console.log( err )
                                )

  }

  getAlluserTest(){

      this.http.get( environment.apiUrl+"sendtst" ,
                    { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
                ).subscribe( ( send : [ UserTest ] ) => { this.testUsers = send } , err => console.log( err ) )

  }


  choosePage( page  ){
      this.selectedPage = page
      this.getPayloads();
      this.payloadSelected = null
      this.payloadinSelected = null
      this.operation =null
  }


  getPayloads(){
      this.http.get( environment.apiUrl+"payload/"+ this.selectedPage.id )
                .subscribe( ( data : [ Payload ] ) =>
                        { this.payloads = data  }
                      , ( err ) => { console.log( err ) ; } )
  }

  choosePayload(payload : Payload ){
      this.payloadSelected = payload
      this.payloadinSelected = JSON.parse(payload.payload)
      this.operation = "edit"
  }

  savePayload(){

      if( this.operation == "edit" ){
        // console.log( this.payloadSelected )
        let payloadNew = JSON.stringify( this.payloadinSelected );
        this.http.put( environment.apiUrl+"payload" , { payload_id : this.payloadSelected.id , th_day : this.payloadSelected.th_day , payload_name :  this.payloadSelected.name , payloadNew : payloadNew  } )
                .subscribe( data => { console.log( data ); this.operation = null ; this.getPayloads(); } , err => console.log( err ) )
      }else if (this.operation == "add"){
        let payloadNew = JSON.stringify( this.payloadinSelected );
        this.payloadSelected.payload = payloadNew
        this.http.post( environment.apiUrl+"payload" , this.payloadSelected )
                  .subscribe( data => { console.log( data ) ; this.operation = null ; this.getPayloads(); } , err => console.log( err ) )

      }

  }

  addPayload(){
      this.operation = "add"

      this.payloadinSelected = {
        title     : "title" ,
        subtitle  : "subtitle" ,
        image_url : "https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.0-9/56770765_2367144943504269_1919008683686100992_n.png?_nc_cat=103&_nc_ht=scontent.fcmn2-1.fna&oh=e7c676f76c7e5ec2f01f35a7901367b3&oe=5D71B361" ,
        payload   : "payload" ,
        cta       : "cta"
      }

      this.payloadSelected = {
        id : null ,
        name : "name" ,
        payload : JSON.stringify( this.payloadinSelected ) ,
        PageId : this.selectedPage.id
      }

  }

  deletePayload( payload ){
      // console.log( payload , environment.apiUrl+payload.id )
      this.http.delete( environment.apiUrl+"/payload/"+payload.id )
              .subscribe( (data) => { console.log( data ) ;  this.getPayloads(); } , err => console.log( err ) );

  }

}

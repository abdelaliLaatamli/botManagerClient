import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from 'src/app/services/auth/auth.service';

    interface dash {
        numUserTest       : number ,
        numPage           : number ,
        numPayload        : number ,
        numPlayer         : number ,
        Sendtest          : [ object ] ,
        PlayerMorePlayer  : [ object ] ,
        PagesWithPayloads : [ object ] ,
        PagesWithPlayes   : [ object ] ,
        Payloads          : [ object ]
        // Sendtest : any
    }


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

    dashVar : dash

  constructor(public http : HttpClient , public authService : AuthService) { }


  ngOnInit() {
      this.getAll()
  }

  getAll(){
    // /dash/all
    // console.log("aaaaaa" )
      this.http.get(environment.apiUrl+"dash/all" ,
          { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
      )
          .subscribe( ( data : dash )  => {   /*console.log( data ) ; */ this.dashVar = data } , err => console.log( err ) )


  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { Pages } from 'src/app/interfaces/pages';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  pages
  page : Pages
  players : [ Player ]

  constructor( public http : HttpClient , public authService : AuthService , ) { }

  ngOnInit() {

    this.getAll()

  }


  getAll(){
    this.pages = []
    const base = this.http.get( environment.apiUrl+"player" ,
                              { headers : {  Authorization : `${this.authService.getTokenGet()}` } }
                              ).subscribe(
                                            datacames => { this.pages = datacames  }  ,
                                            // datacames => { this.pages = datacames ; console.log( datacames )  }  ,
                                            // datacames => { console.log( datacames ) }  ,
                                            err => console.log( err )
                              )

  }

  selectedPlayer( page : Pages ){
      console.log( page )
  }




}

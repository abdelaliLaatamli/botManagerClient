import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // phras : string = "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa .......... "
  phras =  "Hi Im a Bot !! <br> I'm  Here to Help you <br> To automate your Conversations <br>  Sing up and let start <br> !!!!!! ..... "

  constructor() { }

  ngOnInit() {

    this.typrenCursul()
    this. jqueryFuncs()
  }


  typrenCursul(){

    const options = {
      strings: [ 'Innovation.' , this.phras ],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);

  }


  jqueryFuncs(){

    resize();

    $(window).resize( () => {
      resize();
    } )

    function resize(){
      $(".typed-element").css({ 'margin-top' : ( $(window).height() - $(".typed-element").height() ) / 2  })
    }

  }





}

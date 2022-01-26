import { Component, OnInit, AfterContentInit } from '@angular/core';
// @ts-ignore
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';
import $ from "jquery";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  onClick(location: string) {
    $('#returnTop').on('click', function(){
      $('html, body').animate({
        // @ts-ignore
        scrollTop: $('#topPage').offset().top
      }, 500);

      window.location.hash = location;
    });
  }


  ngOnInit(): void {
    let burger: any = document.querySelector('.burger');
    let menu: any = document.getElementById('menu');
    let fullpage: any = document.getElementById('fullpage');

    window.setTimeout(() => {
      fullpage.classList.add('displayAnim');
    }, 1000);

    burger.addEventListener('click', () => {
      console.log('Click');
      burger.classList.toggle('active');
      menu.classList.toggle('open');
      //menu.classList.add('open');
    })
  }

  ngAfterContentInit(): void {
    /* ============ */
    /*   PARALLAX   */
    /* ============ */
    (function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem: any = document.querySelector(".parallax");
      // Magic happens here
      function parallax(e: any) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
      }
    })();
    /* ============ */
    /* ============ */
    /* ============ */

  }

}



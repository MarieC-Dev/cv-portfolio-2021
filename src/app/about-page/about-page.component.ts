import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

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

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('open');
    });

  }

}

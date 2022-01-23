import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  constructor() { }

  onClick(location: string) {
    $('#returnTopExperience').on('click', function(){
      $('html, body').animate({
        // @ts-ignore
        scrollTop: $('#topPageExperience').offset().top
      }, 500);

      console.log('click');
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

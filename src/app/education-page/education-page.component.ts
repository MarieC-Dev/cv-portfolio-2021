import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {

  constructor() { }

  onClick(location: string) {
    $('#returnTopEducation').on('click', function(){
      $('html, body').animate({
        // @ts-ignore
        scrollTop: $('#topPageEducation').offset().top
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

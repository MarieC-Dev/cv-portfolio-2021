import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'skills-page',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  onClick(location: string) {
    $('#returnTopSkill').on('click', function(){
      $('html, body').animate({
        // @ts-ignore
        scrollTop: $('#topPageSkill').offset().top
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

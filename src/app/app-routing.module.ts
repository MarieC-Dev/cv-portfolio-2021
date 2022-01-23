import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { SkillsComponent } from "./skills/skills.component";
import { EducationPageComponent } from "./education-page/education-page.component";
import { ExperiencePageComponent } from "./experience-page/experience-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'experience', component: ExperiencePageComponent },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

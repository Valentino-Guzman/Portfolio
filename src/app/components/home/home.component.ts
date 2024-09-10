import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SocialLinkComponent } from "../social-link/social-link.component";
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SocialLinkComponent, EducationComponent, ProjectsComponent, ExperienceComponent, AboutMeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

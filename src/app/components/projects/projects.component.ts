import { Component } from '@angular/core';
import { GithubComponent } from "../icons/github/github.component";
import { AngularComponent } from "../icons/angular/angular.component";
import { NodeComponent } from "../icons/node/node.component";
import { TailwindCssComponent } from "../icons/tailwind-css/tailwind-css.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GithubComponent, AngularComponent, NodeComponent, TailwindCssComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}

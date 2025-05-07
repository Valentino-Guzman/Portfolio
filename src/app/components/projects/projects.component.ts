import { Component } from '@angular/core';
import { GithubComponent } from "../icons/github/github.component";
import { AngularComponent } from "../icons/angular/angular.component";
import { NodeComponent } from "../icons/node/node.component";
import { PreviewComponent } from "../icons/preview/preview.component";
import { CarruselImagenesComponent } from "../carrusel-imagenes/carrusel-imagenes.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GithubComponent, AngularComponent, NodeComponent, PreviewComponent, CarruselImagenesComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}

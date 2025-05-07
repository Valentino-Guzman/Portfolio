import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-imagenes',
  standalone: true,
  imports: [NgFor,NgClass, NgIf],
  templateUrl: './carrusel-imagenes.component.html',
  styleUrl: './carrusel-imagenes.component.css'
})
export class CarruselImagenesComponent {
  images: string[] = [
    'prolytics.webp',
    'prolytics_2.webp',
    'prolytics_3.webp'
  ];
  currentImage = 0;
  hovering = false;
  hoveringInsideModal = false;
  hoverTimeout: any;
  isZoomedIn = false; 

  openModal() {
    this.hovering = true;
  }

  closeModal() {
    this.hovering = false;
  }

  next() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  prev() {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
  }

}

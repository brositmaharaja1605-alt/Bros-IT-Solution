// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-hero-slider',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './hero-slider.component.html',
//   styleUrls: ['./hero-slider.component.css']
// })
// export class HeroSliderComponent {

//   images = [
//     'assets/img/one.png',
//     'assets/img/two.png',
//     'assets/img/third.png'
//   ];

//   currentIndex = 0;

//   constructor() {
//     setInterval(() => {
//       this.nextSlide();
//     }, 4000);
//   }

//   nextSlide() {
//     this.currentIndex =
//       (this.currentIndex + 1) % this.images.length;
//   }

//   previousSlide() {
//     this.currentIndex =
//       (this.currentIndex - 1 + this.images.length) %
//       this.images.length;
//   }

// }


import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit {

  images: string[] = [];

  currentIndex = 0;

  ngOnInit(): void {

    this.loadImages();

    setInterval(() => {

      this.nextSlide();

    }, 4000);

  }

  @HostListener('window:resize')

  onResize(): void {

    const oldLength = this.images.length;

    this.loadImages();

    if (this.currentIndex >= oldLength) {

      this.currentIndex = 0;

    }

  }

  loadImages(): void {

    if (window.innerWidth <= 768) {

      this.images = [

        'assets/img/one-mobile.png',

        'assets/img/two-mobile.png',

        'assets/img/third-mobile.png'

      ];

    } else {

      this.images = [

        'assets/img/one.png',

        'assets/img/two.png',

        'assets/img/third.png'

      ];

    }

  }

  nextSlide(): void {

    this.currentIndex =

      (this.currentIndex + 1) % this.images.length;

  }

  previousSlide(): void {

    this.currentIndex =

      (this.currentIndex - 1 + this.images.length) %

      this.images.length;

  }

}

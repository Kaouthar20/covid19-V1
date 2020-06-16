import { Component, OnInit } from '@angular/core';
import { carouselElements } from 'src/app/data/carouselElements.data';
import { Carousel } from 'src/app/objects/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselElements= [...carouselElements
  ]; 
  element : Carousel;
  constructor() { }
  ngOnInit(): void {

  }


  slideOptions = {
    nav: true,
    dots: true,
    loop: false,
    margin: 10,
    responsiveClass: true,
    // responsive object contains responsive options.
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };

  
}

 



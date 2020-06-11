import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
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

  images = [
    
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
   
    '../assets/image/backgroundHome.jpg'
  ];
}

 



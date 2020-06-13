import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselElements= [

    {
      image: '../assets/image/COVID-19-Coronavirus-Map.jpg',
      title : "Situation update worldwide",
      badge :"Go Home",
      description:'Disclaimer: National updates are published at different times and in different time zones. This, and the time ECDC needs to process these data, may lead to discrepancies between the national numbers and the numbers published by ECDC'
    },
    {
      image: '../assets/image/healthService.jpg',
      title : "COVID-19 significantly impacts health services for noncommunicable diseases",
      badge :"Go Home",
      description:' Prevention and treatment services for noncommunicable diseases (NCDs) have been severely disrupted since the COVID-19 pandemic began, according to a WHO survey released today.'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "Mutation Allows Coronavirus to Infect More Cells, Study Finds. Scientists Urge Caution.",
      badge :"Go Home",
      description:'Geneticists said more evidence is needed to determine if a common genetic variation of the virus spreads more easily between people.'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "card 4",
      badge :"Go Home",
      description:'provide some description here to make it awesome'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "card 5",
      badge :"Go Home",
      description:'provide some description here to make it awesome'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "card 6",
      badge :"Go Home",
      description:'provide some description here to make it awesome'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "card 7",
      badge :"Go Home",
      description:'provide some description here to make it awesome'
    },
    {
      image: '../assets/image/backgroundHome.jpg',
      title : "card 8",
      badge :"Go Home",
      description:'provide some description here to make it awesome'
    }
  ]; 
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

  images = [
    
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
    '../assets/image/backgroundHome.jpg',
   
    '../assets/image/backgroundHome.jpg'
  ];
}

 



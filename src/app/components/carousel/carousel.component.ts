import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/objects/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 slides= [Carousel];

  constructor() { }
 
  ngOnInit(): void {

  }

}

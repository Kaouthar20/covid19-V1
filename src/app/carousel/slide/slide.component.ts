import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/objects/carousel';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  slide: Carousel;

  constructor() { }
   
  ngOnInit(): void {
  }

}

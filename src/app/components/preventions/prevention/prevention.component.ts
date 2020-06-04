import { Component, OnInit, Input } from '@angular/core';
import { Prevention } from 'src/app/objects/prevention';


@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss']
})
export class PreventionComponent implements OnInit {
  @Input() prevention: Prevention;  
  constructor() { }


  ngOnInit(): void {
  }

}

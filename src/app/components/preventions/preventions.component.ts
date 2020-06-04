import { Component, OnInit } from '@angular/core';

import { preventions } from 'src/app/data/preventions.data';

@Component({
  selector: 'app-preventions',
  templateUrl: './preventions.component.html',
  styleUrls: ['./preventions.component.scss']
})
export class PreventionsComponent implements OnInit {

  constructor() { }
  preventions = [...preventions];
  ngOnInit(): void {
  }

}

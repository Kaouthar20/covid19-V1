import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css']
})
export class SymptomComponent implements OnInit {
  @Input() name: string;  
  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Symptom } from 'src/app/objects/symptom';

@Component({
  selector: 'symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css']
})
export class SymptomComponent implements OnInit {
  @Input() symptom: Symptom;  
  constructor() { }

  ngOnInit(): void {
  }
}

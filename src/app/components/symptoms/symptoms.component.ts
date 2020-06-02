import { Component, OnInit } from '@angular/core';

import { SymptomComponent } from './symptom/symptom.component';
import { symptoms } from '../../data/symptoms.data';
import { Symptom } from '../../objects/symptom';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {
  constructor() { }
  symptoms  = [...symptoms];
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { SymptomComponent } from '../../symptom/symptom.component'

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  symptoms: Array<object> = [
    { name: 'Coughing' },
    { name: 'High Fever' },
    { name: 'Pneumonia' },
    { name: 'Shortness of Breath' },
    { name: 'Vomiting' },
    { name: 'Diarrhea' }];
  constructor() { }

  ngOnInit(): void {
  }

}

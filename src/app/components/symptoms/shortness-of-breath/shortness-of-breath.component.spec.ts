import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortnessOfBreathComponent } from './shortness-of-breath.component';

describe('ShortnessOfBreathComponent', () => {
  let component: ShortnessOfBreathComponent;
  let fixture: ComponentFixture<ShortnessOfBreathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortnessOfBreathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortnessOfBreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighFeverComponent } from './high-fever.component';

describe('HighFeverComponent', () => {
  let component: HighFeverComponent;
  let fixture: ComponentFixture<HighFeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighFeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighFeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarrheaComponent } from './diarrhea.component';

describe('DiarrheaComponent', () => {
  let component: DiarrheaComponent;
  let fixture: ComponentFixture<DiarrheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarrheaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarrheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

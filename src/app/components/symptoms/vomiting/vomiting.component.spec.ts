import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VomitingComponent } from './vomiting.component';

describe('VomitingComponent', () => {
  let component: VomitingComponent;
  let fixture: ComponentFixture<VomitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VomitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VomitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

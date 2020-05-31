import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoughingsComponent } from './coughings.component';

describe('CoughingsComponent', () => {
  let component: CoughingsComponent;
  let fixture: ComponentFixture<CoughingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoughingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoughingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

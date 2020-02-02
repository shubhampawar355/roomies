import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorhomeComponent } from './validatorhome.component';

describe('ValidatorhomeComponent', () => {
  let component: ValidatorhomeComponent;
  let fixture: ComponentFixture<ValidatorhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

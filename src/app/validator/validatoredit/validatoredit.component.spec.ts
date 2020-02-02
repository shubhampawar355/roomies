import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatoreditComponent } from './validatoredit.component';

describe('ValidatoreditComponent', () => {
  let component: ValidatoreditComponent;
  let fixture: ComponentFixture<ValidatoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

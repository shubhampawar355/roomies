import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedroomComponent } from './requestedroom.component';

describe('RequestedroomComponent', () => {
  let component: RequestedroomComponent;
  let fixture: ComponentFixture<RequestedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

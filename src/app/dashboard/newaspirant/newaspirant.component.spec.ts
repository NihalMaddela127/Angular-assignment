import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaspirantComponent } from './newaspirant.component';

describe('NewaspirantComponent', () => {
  let component: NewaspirantComponent;
  let fixture: ComponentFixture<NewaspirantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaspirantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

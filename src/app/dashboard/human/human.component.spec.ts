import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanComponent } from './human.component';

describe('HumanComponent', () => {
  let component: HumanComponent;
  let fixture: ComponentFixture<HumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("HumanComponent", () =>{
    fit("should check if human can vote", ()=>{
      component.age = 18;
      component.checkEligibility(component.age)
      expect(component.isEligible).toBe(false);
    });
  });

});

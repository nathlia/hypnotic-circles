import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOneComponent } from './circle-one.component';

describe('CircleOneComponent', () => {
  let component: CircleOneComponent;
  let fixture: ComponentFixture<CircleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleOneComponent]
    });
    fixture = TestBed.createComponent(CircleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

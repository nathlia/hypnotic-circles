import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleThreeComponent } from './circle-three.component';

describe('CircleThreeComponent', () => {
  let component: CircleThreeComponent;
  let fixture: ComponentFixture<CircleThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleThreeComponent]
    });
    fixture = TestBed.createComponent(CircleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

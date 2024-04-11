import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTwoComponent } from './circle-two.component';

describe('CircleTwoComponent', () => {
  let component: CircleTwoComponent;
  let fixture: ComponentFixture<CircleTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleTwoComponent]
    });
    fixture = TestBed.createComponent(CircleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightControllerComponent } from './traffic-light-controller.component';

describe('TrafficLightControllerComponent', () => {
  let component: TrafficLightControllerComponent;
  let fixture: ComponentFixture<TrafficLightControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficLightControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficLightControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

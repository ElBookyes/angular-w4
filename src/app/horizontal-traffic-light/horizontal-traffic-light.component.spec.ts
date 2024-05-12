import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTrafficLightComponent } from './horizontal-traffic-light.component';

describe('HorizontalTrafficLightComponent', () => {
  let component: HorizontalTrafficLightComponent;
  let fixture: ComponentFixture<HorizontalTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

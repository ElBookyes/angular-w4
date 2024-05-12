import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTrafficLightComponent } from './vertical-traffic-light.component';

describe('VerticalTrafficLightComponent', () => {
  let component: VerticalTrafficLightComponent;
  let fixture: ComponentFixture<VerticalTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

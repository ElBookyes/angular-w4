import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TrafficLightControllerComponent } from '../traffic-light-controller/traffic-light-controller.component';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})
export class TrafficLightComponent {
  @Input() color!: string;
  @Input() emergency!: boolean;
  @Input() isDisabled!: boolean;
  @Input() direction!: string;
  @Input() container!: string;
  @Input() onCrossPress = () => {};

  trafficLightController = inject(TrafficLightControllerComponent);

  onCrossClick() {
    this.trafficLightController.processCrossClick();
  }
}

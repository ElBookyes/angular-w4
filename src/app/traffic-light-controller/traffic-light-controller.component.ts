import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';

@Component({
  selector: 'app-traffic-light-controller',
  standalone: true,
  imports: [CommonModule, TrafficLightComponent],
  templateUrl: './traffic-light-controller.component.html',
  styleUrl: './traffic-light-controller.component.scss'
})
export class TrafficLightControllerComponent {
  private trafficLightsInterval: any;
  private yellowBlinkInterval: any;
  emergency: boolean = false;

  horizontalColor: string = 'red';
  verticalColor: string = 'green';
  direction: string = '';
  container: string = ''
  crossButtonDisabled: boolean = false;
  emergencyButtonDisabled: boolean = false;

  ngOnInit(): void {
    this.startTrafficLightsInterval()
  }

  startTrafficLightsInterval() {
    if (!this.emergency) {
      this.trafficLightsInterval = setInterval(() => {
        this.toggleColors();
      }, 5000)
    }
  }

  toggleColors() {
    const newHorizontalColor = this.horizontalColor === 'red' ? 'green' : 'red';
    const newVerticalColor = this.verticalColor === 'red' ? 'green' : 'red';
    this.handleYellow(newHorizontalColor, newVerticalColor);
  }

  handleYellow(newHorizontalColor: string, newVerticalColor: string) {
    this.horizontalColor = 'yellow';
    this.verticalColor = 'yellow';
    this.clearTrafficLightsInterval();

    setTimeout(() => {
      this.horizontalColor = newHorizontalColor;
      this.verticalColor = newVerticalColor;
      this.startTrafficLightsInterval();
    }, 2000)
  }

  processEmergency() {
    if (!this.emergency) {
      this.emergency = true;
      this.emergencyButtonDisabled = true;
      this.clearTrafficLightsInterval();
      this.yellowBlinkInterval = setInterval(() => {
        this.flashYellowLights();
      }, 500);
    }
    setTimeout(() => {
      clearInterval(this.yellowBlinkInterval);
      this.emergency = false;
      this.resetTrafficLights();
      this.startTrafficLightsInterval();
      this.enableEmergencyButtonAfterDelay();
    }, 10000);
  }

  processCrossClick() {
    if (this.horizontalColor === 'yellow' || this.verticalColor === 'yellow') {
      alert('Incorrect crossing');
      console.log('Incorrect crossing');
    }
  }

  flashYellowLights(){
    this.horizontalColor = this.horizontalColor == 'yellow' ? 'off' : 'yellow';
    this.verticalColor = this.verticalColor == 'yellow' ? 'off' : 'yellow';
  }

  clearTrafficLightsInterval() {
    clearInterval(this.trafficLightsInterval);
  }

  resetTrafficLights() {
    this.horizontalColor = 'red';
    this.verticalColor = 'green';
    this.clearTrafficLightsInterval();
    this.startTrafficLightsInterval();
  }

  enableEmergencyButtonAfterDelay() {
    setTimeout(() => {
      this.emergencyButtonDisabled = false;
    }, 10000);
  }
}

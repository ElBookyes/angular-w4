import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horizontal-traffic-light',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './horizontal-traffic-light.component.html',
  styleUrl: './horizontal-traffic-light.component.scss'
})
export class HorizontalTrafficLightComponent {

  redActive: boolean = false;
  yellowActive: boolean = false;
  greenActive: boolean = true;
  urgency: boolean = false;


  changeTrafficLightState(): void {
    if(this.greenActive) {
      setTimeout(() => this.toggleYellow(), 5000);
    } 
    if(this.yellowActive) {
      setTimeout(() => this.toggleRed(), 2000);
    } 
    if(this.redActive) {
      setTimeout(() => this.toggleGreen(), 5000);
    }
  }

  trafficLightState(): string {
    if (this.redActive && !this.yellowActive && !this.greenActive) {
      return 'red';
    } else if (!this.redActive && this.yellowActive && !this.greenActive) {
      return 'yellow';
    } else if (!this.redActive && !this.yellowActive && this.greenActive) {
      return 'green';
    } else {
      return 'off';
    }
  }

  toggleRed(): void {
    this.redActive = true;
    this.yellowActive = false;
    this.greenActive = false;
  }

  toggleYellow(): void {
    this.redActive = false;
    this.yellowActive = true;
    this.greenActive = false;
  }

  toggleGreen(): void {
    this.redActive = false;
    this.yellowActive = false;
    this.greenActive = true;
  }

  reset(): void {
    this.redActive = false;
    this.yellowActive = false;
    this.greenActive = false;
  }
}

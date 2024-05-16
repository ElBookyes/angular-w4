import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorizontalTrafficLightComponent } from './horizontal-traffic-light/horizontal-traffic-light.component';
import { VerticalTrafficLightComponent } from './vertical-traffic-light/vertical-traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HorizontalTrafficLightComponent, VerticalTrafficLightComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private trafficLightsInterval: any;
  private yellowBlinkInterval: any;
  private emergency: boolean = false;
  
  horizontalColor: string = 'red';
  verticalColor: string = 'green';
  crossButtonDisabled: boolean = false;
  emergencyButtonDisabled: boolean = false;

  ngOnInit(): void {
    this.startTrafficLightsInterval()
  }

  startTrafficLightsInterval() {
    if (!this.emergency) {
      this.trafficLightsInterval = setInterval(() => {
        const newHorizontalColor = this.horizontalColor === 'red' ? 'green': 'red';
        const newVerticalColor = this.verticalColor === 'red' ? 'green': 'red';

        this.handleYellow(newHorizontalColor, newVerticalColor);
      }, 5000)
    }
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

      setTimeout(() => {
        this.emergencyButtonDisabled = false;
      }, 10000);
    }, 10000);
  }

  processCrossClick() {
    if (this.horizontalColor === 'yellow') {
      alert('Incorrect crossing');
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
}

// Create a simple WEB simulation of an intersection. On the screen, the user sees 4 components resembling traffic lights
// at an intersection - with four colors.
// The traffic lights should be arranged horizontally and vertically, similar to the description in the illustration.

// 1. The traffic lights should be components consisting of 4 colors - red, yellow, green, and off.
// 2. The traffic lights are synchronized and display red-yellow and red in the following interval:
// red - 5 seconds
// yellow - 2 seconds
// green - 5 seconds
// 3. The horizontal traffic lights start from green and the vertical ones from red.
// When the yellow light is on, however, everything is illuminated in yellow simultaneously.
// 4. Add one button next to each traffic light, titled "Crossing." Its functionality is simple:
// - When the corresponding traffic light is red, the button is disabled and cannot be pressed.
// - When the corresponding traffic light is yellow or green, the button is active for pressing.
// If the button is pressed during a yellow light signal, display a message - "Incorrect crossing."
// If the button is pressed during a green light signal, you cross correctly and nothing is displayed on the screen.
// 5. Add one large button - Emergency. When pressed, all traffic lights flash yellow for a period of 10 seconds.
// After the emergency is over, the button is inactive for 10 seconds and cannot be pressed.
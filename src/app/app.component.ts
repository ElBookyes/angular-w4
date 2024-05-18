import { Component, OnInit } from '@angular/core';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrafficLightComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'traffic-light-simulator';
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
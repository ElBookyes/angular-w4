import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-traffic-light.component.html',
  styleUrl: './vertical-traffic-light.component.scss'
})
export class VerticalTrafficLightComponent {
  @Input() verticalColor!: string;
  @Input() emergency!: boolean;
  @Input() isDisabled!: boolean;
}

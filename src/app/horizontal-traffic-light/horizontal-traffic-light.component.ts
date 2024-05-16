import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-horizontal-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-traffic-light.component.html',
  styleUrl: './horizontal-traffic-light.component.scss'
})
export class HorizontalTrafficLightComponent {
  @Input() horizontalColor!: string;
  @Input() emergency!: boolean;
  @Input() isDisabled!: boolean;
  @Input() onCrossClick!: () => void;
}

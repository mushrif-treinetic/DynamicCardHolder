import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  standalone: false,
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.scss'
})
export class WelcomeCardComponent {
  @Input() username = 'Guest';
}

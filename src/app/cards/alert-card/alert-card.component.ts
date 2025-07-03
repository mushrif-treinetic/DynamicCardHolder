import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-card',
  standalone: false,
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.scss'
})
export class AlertCardComponent {
  @Output() dismiss = new EventEmitter<void>();
}

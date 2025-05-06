import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() severity: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() message = 'This is an alert.';

  getClasses() {
    return {
      success: this.severity === 'success',
      info: this.severity === 'info',
      warning: this.severity === 'warning',
      danger: this.severity === 'danger',
    };
  }
}

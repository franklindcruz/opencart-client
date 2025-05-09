import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() value = '';
  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' = 'primary';

  getClasses() {
    return {
      'bg-primary': this.severity === 'primary',
      'bg-secondary': this.severity === 'secondary',
      'bg-success': this.severity === 'success',
      'bg-info': this.severity === 'info',
      'bg-warning': this.severity === 'warning',
      'bg-danger': this.severity === 'danger',
    };
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() disabled = false;
  @Input() severity: 'primary' | 'success' | 'danger' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() onClick = new EventEmitter();

  getClasses() {
    return {
      primary: this.severity === 'primary',
      success: this.severity === 'success',
      danger: this.severity === 'danger',
    };
  }

  handleClick() {
    this.onClick.emit();
  }
}

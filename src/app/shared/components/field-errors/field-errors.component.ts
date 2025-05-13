import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  imports: [CommonModule],
  templateUrl: './field-errors.component.html',
  styleUrl: './field-errors.component.css',
})
export class FieldErrorsComponent implements OnChanges {
  @Input() errors: any; // {required: true, minlength: {requiredLength: 2, actualLength: 1}}
  @Input() field: AbstractControl<any, any> | null = null;

  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['errors']) {
      return;
    }

    this.errorMessages = [];
    // Error message for default errors.
    const errorKeys = Object.keys(this.errors);
    for (const key of errorKeys) {
      switch (key) {
        case 'required':
          this.errorMessages.push(`This field is required.`);
          break;
        case 'minlength':
          this.errorMessages.push(`This field is too short.`);
          break;
        case 'maxlength':
          this.errorMessages.push(`This field is too long.`);
          break;
        default:
          const message = this.errors[key];
          if (message && typeof message === 'string') {
            this.errorMessages.push(message);
          }
          break;
      }
    }
  }
}

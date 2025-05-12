
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-field-errors',
  standalone: false,

  templateUrl: './field-errors.component.html',
  styleUrl: './field-errors.component.css',
})
export class FieldErrorsComponent implements OnChanges {
  @Input() errors: any;

  errorMessages: string[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['errors']) {
      return;
    }
    const errorKeys = Object.keys(changes['errors'].currentValue);
    this.errorMessages = errorKeys.map((key) => changes['errors'].currentValue[key]);
  }
}

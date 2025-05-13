import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    standalone: false,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent {
    signupForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.signupForm = fb.group({
            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(25)
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(25)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(25),
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(25)
            ]),
            confirmPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(25)
            ])
        });
    }

    onSubmit() {
        console.log(this.signupForm);
    }
}

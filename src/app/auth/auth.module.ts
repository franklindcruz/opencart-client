import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './features/signup/signup.component';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AuthLayoutComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NavbarComponent,
        ButtonComponent,
        FormsModule
    ]
})
export class AuthModule { }
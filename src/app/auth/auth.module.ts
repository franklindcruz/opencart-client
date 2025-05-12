import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './features/signup/signup.component';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
@NgModule({
    declarations: [
        AuthLayoutComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NavbarComponent
    ]
})
export class AuthModule { }
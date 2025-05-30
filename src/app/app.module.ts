import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './shared/components/alert/alert.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoadingIndicatorComponent } from './shared/components/loading-indicator/loading-indicator.component';
import { baseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { Error404Component } from './pages/error-404/error-404.component';
import { ButtonComponent } from './shared/components/button/button.component';


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        BadgeComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        Error404Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        LoadingIndicatorComponent,
        ButtonComponent
    ],
    providers: [
        provideHttpClient(withInterceptors([baseUrlInterceptor])),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

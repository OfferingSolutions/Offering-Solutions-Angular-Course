import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HomeModule,
        RouterModule.forRoot(AppRoutes),
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }

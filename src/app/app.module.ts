import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule  } from '@angular/router';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
    { path: '', loadChildren: '../home-module/module#HomeModule' },
    { path: 'contact', loadChildren: '../contact-module/module#ContactModule' }
]
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
    declarations: [AppComponent],

    imports:      [ BrowserModule, RouterModule, routing ],

    bootstrap:    [AppComponent],
    providers:    []
})
export class AppModule {
    constructor(){}

}

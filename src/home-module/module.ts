import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {HomeComponent} from './home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }
]
export const routing = RouterModule.forChild(appRoutes);

@NgModule({
    declarations: [HomeComponent],

    imports:      [ RouterModule, routing ],

    providers:    []
})
export class HomeModule {
    constructor(){}

}
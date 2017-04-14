import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {ContactComponent} from './contact.component';

export const appRoutes: Routes = [
    { path: '', component: ContactComponent }
]
export const routing = RouterModule.forChild(appRoutes);

@NgModule({
    declarations: [ContactComponent],

    imports:      [ RouterModule, routing ],

    providers:    []
})
export class ContactModule {
    constructor(){}

}
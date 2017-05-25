import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component.ts';
import { AngVersionComponent } from './angularVersion.component.ts';

@NgModule({
    declarations: [
        AppComponent,
        AngVersionComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

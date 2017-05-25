import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VERSION } from '@angular/core';

// appComponent --------------------------- //
@Component({
    selector: 'app-root',
    template: '<p>{{msg}}</p><ang-version></ang-version>'
})

class AppComponent {
    msg = 'hi world'
}

// angVersionComponent --------------------------- //
@Component({
    selector: 'ang-version',
    template: '<small>angular version: {{version}}</small>'
})

export class AngVersionComponent {
    version:string = '0.0.0';

    constructor() {
        this.version = VERSION.full;
//    console.log(VERSION.full); // print 2.3.0-rc.0
    }
}

// NgModule --------------------------- //
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, AngVersionComponent ],
    bootstrap: [ AppComponent ]
})

class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

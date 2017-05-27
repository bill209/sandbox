import {Component, NgModule, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {VERSION} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

// appComponent --------------------------- //
@Component({
    selector: 'app-root',
    template: `
    <p>{{msg}}</p>
    <ang-version></ang-version><br/>
    <plunker></plunker>
  `
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
    version: string = '0.0.0';

    constructor() {
        this.version = VERSION.full;
//    console.log(VERSION.full); // print 2.3.0-rc.0
    }
}

// plunkerComponent --------------------------- //
@Component({
    selector: 'plunker',
    template: '<a *ngIf="showPlunker" href="{{plnkrUrl}}">plunker</a>'
})

export class PlunkerComponent {
    plnkrUrl: string = 'http://plnkr.co/edit/mZDW3NZ6zlOQqIbeBMXb?p=preview';
    showPlunker: boolean = true;
    url: string = 'abc.com';

    constructor(@Inject(DOCUMENT) private document: any) {
        // this pulls back the URL of the iframe in which this is run
        this.url = this.document.location.href;
        this.showPlunker = this.url.indexOf('plnkr.co') === -1;
    }
}

// NgModule --------------------------- //
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AngVersionComponent, PlunkerComponent],
    bootstrap: [AppComponent]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

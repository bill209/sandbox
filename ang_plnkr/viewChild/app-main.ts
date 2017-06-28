import {Component, NgModule, Inject, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {VERSION} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

// childComponent --------------------------- //
@Component({
    selector: 'child',
    template: `
      <p>child component 
        <span [hidden]="wasClicked">was clicked</span>
      </p>
    `
})

export class ChildComponent {
  wasClicked: boolean = true;
  constructor() {}

  sendData(){
    console.log('sendData');
    this.wasClicked = false;
  }
}

// appComponent --------------------------- //
@Component({
    selector: 'app-root',
    styles: ['child { cursor: pointer }'],
    template: `
    <child (click)="update()"></child>
    <plunker></plunker>
  `
})

class AppComponent { 
  @ViewChild(ChildComponent) child: ChildComponent;
  
  constructor() { }
  
  ngAfterViewInit() {
    // After the view is initialized, this.child will be available
    // this.update();
  }

  update() {
    console.log('parent send data');
    this.child.sendData();
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
    declarations: [AppComponent, 
      PlunkerComponent,
      ChildComponent
    ],
    bootstrap: [AppComponent]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngVersionComponent } from './angVersion.component.ts';

@Component({
    selector: 'app-root',
    template: '<p>{{msg}}</p><ang-version></ang-version>'
})

class AppComponent {
    msg = 'hi world'
}


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, AngVersionComponent ],
    bootstrap: [ AppComponent ]
})

class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

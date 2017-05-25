import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-root',
    template: '<p>{{msg}}</p>'
})

class AppComponent {
    msg = 'hi world';
}


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

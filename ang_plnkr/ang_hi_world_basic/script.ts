import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: '<p>hi world</p>'
})

class AppComponent {
}


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

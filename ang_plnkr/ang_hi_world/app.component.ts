import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<p>{{msg}}</p><ang-version></ang-version>'
})

export class AppComponent {
    msg = 'hi world';
}


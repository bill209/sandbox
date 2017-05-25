import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
    selector: 'ang-version',
    template: '<small>angular version: {{version}}</small>'
})

export class AngVersionComponent {
    version:string = '0.0.0';

    constructor() {
        this.version = VERSION.full;  // print 2.3.0-rc.0
    }
}
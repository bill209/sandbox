import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <ngb-alert [dismissible]="false">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </ngb-alert>
  `,
  styles: []
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

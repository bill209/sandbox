import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  template: `
    <div>
      <h3>Common Carrier Freight Railroads in the United States</h3>
      <span>a small sampling</span>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

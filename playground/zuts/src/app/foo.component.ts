import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo Works!
    </p>
  `,
  styles: []
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

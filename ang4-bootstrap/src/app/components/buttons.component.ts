import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div [(ngModel)]="model" ngbRadioGroup name="radioBasic">
      <label class="btn btn-primary">
        <input type="radio" [value]="1"> Left (pre-checked)
      </label>
      <label class="btn btn-primary">
        <input type="radio" value="middle"> Middle
      </label>
      <label class="btn btn-primary">
        <input type="radio" [value]="false"> Right
      </label>
    </div>
    <hr>
    <pre>{{model}}</pre>
  `,
  styles: []
})

export class ButtonsComponent {
  model = 1;
}

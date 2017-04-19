import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-train-header',
  template: `
    <app-data-choice [dataChoice]="dataChoice"></app-data-choice>
    <h3>Common Carrier Freight Railroads in the United States</h3>
    <span>...a small sampling</span>
  `,
  styles: []
})
export class TrainHeaderComponent {

	@Input()
	dataChoice = 2;

}
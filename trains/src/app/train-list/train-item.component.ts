import { Component, Input } from '@angular/core';
import { Train } from "../train";
import { AppSettings } from '../app-settings';

@Component({
	selector: 'app-train-item',
	template: `
		<md-list-item>
			<img md-list-avatar src="assets/images/trains/{{train.imagePath}}" alt="...">
			<h3 md-line> {{train.name}} </h3>
			<p md-line>
				<span> {{train.descrition}} </span>
				<span class="demo-2"> -- this is the cool stuff </span>
			</p>
		</md-list-item>
`,
	styles: []
})
export class TrainItemComponent {

	@Input() train: Train;
	trainId: number;

	constructor() { }

}

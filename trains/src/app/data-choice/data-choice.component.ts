import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-data-choice',
	template: `
		<div class="radioBox">
				<md-radio-group [(ngModel)]="dataChoice">
		
					<md-radio-button [value]="1" class="md-primary">local</md-radio-button>
					<md-radio-button [value]="2">firebase</md-radio-button>
		
				</md-radio-group>
		</div>
		<p>dc: {{dataChoice}}</p>
	`,
	styles: []
})
export class DataChoiceComponent implements OnInit {

	@Input()
	dataChoice = 2;

	constructor() {
	}

	ngOnInit() {
	}

}

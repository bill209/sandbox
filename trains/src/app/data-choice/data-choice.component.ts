import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-choice',
	template: `
		<div class="radioBox">
				<md-radio-group [(ngModel)]="dataChoice">
		
					<md-radio-button [value]="1" class="md-primary">local</md-radio-button>
					<md-radio-button [value]="2">firebases</md-radio-button>
		
				</md-radio-group>
		</div>
	`,
	styles: []
})
export class DataChoiceComponent implements OnInit {

	private dataChoice: string;

	constructor() {
		this.dataChoice = '1';
	}

	ngOnInit() {
	}

}

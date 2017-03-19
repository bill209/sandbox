import { Component, Input } from '@angular/core';
import {Train} from "../train";
import {TrainService} from "../train.service";
import {AppSettings} from "../app-settings";

@Component({
  selector: 'app-train-detail',
  template: `
    <h3>{{selectedTrain?.name}}</h3>
	    <img *ngIf="selectedTrain" src="assets/images/trains/{{selectedTrain.imagePath}}" alt="" class="img-responsive">
  `,
  styles: []
})
export class TrainDetailComponent {

	@Input() selectedTrain: Train;
	trainUrl: string;

	constructor(
  	private trainService: TrainService
	) { }
}

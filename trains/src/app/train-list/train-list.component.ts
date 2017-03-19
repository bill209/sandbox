import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Train} from "../train";
import {TrainService} from "../train.service";

@Component({
  selector: 'app-train-list',
  template: `
		<md-list>
			<app-train-item *ngFor="let train of trains; let i = index"
											[train]="train"
											(click)="onSelected(train)">
			</app-train-item>			
		</md-list>
  `,
  styles: []
})
export class TrainListComponent implements OnInit {

  trains: Train[] = [];
	@Output()trainSelected =  new EventEmitter<Train>();

  constructor(private trainService: TrainService) { }

	ngOnInit() {
		this.trains = this.trainService.getTrains();
	}

	onSelected(train: Train){
		this.trainSelected.emit(train);
	}
}

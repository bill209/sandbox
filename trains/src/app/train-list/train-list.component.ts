import { Component, OnInit } from '@angular/core';
import {Train} from "../train";
import {TrainItemComponent} from "./train-item.component";
import {TrainService} from "../train.service";

@Component({
  selector: 'app-train-list',
  template: `
		<md-list>
          <app-train-item *ngFor="let train of trains; let i = index"
          								[trainId]="i"
          								[train]="train"></app-train-item>			
		</md-list>
  `,
  styles: []
})
export class TrainListComponent implements OnInit {

  trains: Train[] = [];

  constructor(private trainService: TrainService) { }

	ngOnInit() {
		this.trains = this.trainService.getTrains();
	}
}

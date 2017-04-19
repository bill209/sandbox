import { Component, OnInit } from '@angular/core';
import { ProviderService } from "./provider.service";


@Component({
  selector: 'app-list',
  template: `
    <p>FirebaseListObservable</p>
    <p>thoughts</p>
    <ul>
      <li class="text" *ngFor="let thought of thoughts | async">
        {{thought.pondering}}
      </li>
    </ul>
    <p>trains</p>
    <ul>
      <li class="text" *ngFor="let rr of railroads | async">
        {{rr.name}}
      </li>
    </ul>
`,
  styles: []
})

export class ListComponent implements OnInit{
	thoughts: any;
	railroads: any;

  constructor(
  	public providerService: ProviderService
	) {}

  ngOnInit(){
		this.thoughts = this.providerService.getThoughts();
		this.railroads = this.providerService.getTrainsList();
	}

}

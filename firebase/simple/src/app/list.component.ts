import { Component, OnInit } from '@angular/core';
import { ProviderService } from "./provider.service";


@Component({
  selector: 'app-list',
  template: `
    <p>FirebaseListObservable</p>
    <p>{{ (items | async |json) }}</p>
    <ul>
      <li class="text" *ngFor="let item of items | async">
        {{item.pondering}}
      </li>
    </ul>
  `,
  styles: []
})

export class ListComponent implements OnInit{
	items: any;

  constructor(
  	public providerService: ProviderService
	) {}

  ngOnInit(){
		this.items = this.providerService.getThoughts();
	}

}

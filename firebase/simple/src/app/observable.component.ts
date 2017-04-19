import { Component, OnInit } from '@angular/core';
import { ProviderService } from "./provider.service";

@Component({
  selector: 'app-observable',
  template: `
	<p>FirebaseObjectObservable</p>
  <p>{{ (railroads | async | json) }}</p>
  
  <p>array of keys</p>
	<ul>
		<li *ngFor='let key of arrayOfKeys'>
				<h3>{{key}}:::{{(railroads | async)}}</h3>
				<p>{{railroads[key].name}}</p>
		</li>
	</ul>

  `,
})
export class ObservableComponent implements OnInit {
  railroads: any;
	public arrayOfKeys;

  constructor(public providerService: ProviderService) {}

  ngOnInit(){
		this.railroads = this.providerService.getTrainsObs();
		console.log('this.railroads', this.railroads);
		this.arrayOfKeys = Object.keys(this.railroads);
		console.log("this.arrayOfKeys", this.arrayOfKeys);

	}
}
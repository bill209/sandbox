import {Component} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-observable',
  template: `
	<p>FirebaseObjectObservable</p>
  <p>{{ (railroads | async | json) }}</p>
  
	<ul>
		<li *ngFor='let key of arrayOfKeys'>
				<h3>{{key}}:::{{(railroads | async)}}</h3>
				<p>{{railroads[key].name}}</p>
		</li>
	</ul>

  `,
})
export class ObservableComponent {
  railroads: FirebaseObjectObservable<any>;
	public arrayOfKeys;

  constructor(af: AngularFire) {
    this.railroads = af.database.object('/trains');
		console.log(this.railroads);
		this.arrayOfKeys = Object.keys(this.railroads);
  }
}
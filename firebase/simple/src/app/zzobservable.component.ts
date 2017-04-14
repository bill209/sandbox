import {Component} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
	selector: 'app-observable',
	template: `
  <h1>{{ (item | async)?.name }}</h1>
  `,
})
export class AppComponent {
	item: FirebaseObjectObservable<any>;
	constructor(af: AngularFire) {
		this.item = af.database.object('/thoughts');
	}
}
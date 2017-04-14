import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProviderService {
  thoughts: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
		this.thoughts = af.database.list('/thoughts');
	}

	getThoughts(){
		return this.thoughts;
	}
}

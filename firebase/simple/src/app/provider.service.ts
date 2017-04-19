import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProviderService {
  thoughts: FirebaseListObservable<any>;
  trainsList: FirebaseListObservable<any>;
	trainsObs: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
		this.thoughts = af.database.list('/thoughts');
		this.trainsList = af.database.list('/trains');
		this.trainsObs = af.database.object('/trains');
	}

	getThoughts(){
		return this.thoughts;
	}

	getTrainsList(){
		return this.trainsList;
	}

	getTrainsObs(){
		return this.trainsObs;
	}
}

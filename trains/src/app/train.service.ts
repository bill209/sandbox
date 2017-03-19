import { Injectable } from '@angular/core';
import { Train } from "./train";

@Injectable()
export class TrainService {

	private trains: Train[] = [
		new Train('CSX', 'lorem ipsum', 'csx.jpg'),
		new Train('American Rails', 'lorem ipsum', 'americanRails.jpg'),
		new Train('Amtrak', 'lorem ipsum', 'amtrak.jpg'),
	]

  constructor() { }

  getTrains(){
  	return this.trains;
	}
}

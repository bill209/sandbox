import { Injectable } from '@angular/core';
import { Train } from "./train";

@Injectable()
export class TrainService {

	private trains: Train[] = [
		new Train('Alaska Railroad', 'ARR', 'alaska.jpg', 'operational', '1914', 'present'),
		new Train('CSX Transportation', 'CSXT', 'csx.jpg', 'operational', '1986', 'present'),
		new Train('Northern Pacific', 'NP', 'americanRails.jpg', 'merged into BNSF', '1864', '1970'),
		new Train('Bloomer Line', 'BLOL', 'bloomer.jpg', 'operational', '1985', 'present'),
		new Train('Blue Ridge Southern Railway', 'BLU', 'blueRidgeSouthern.jpg', 'operational', '2014', 'present'),
		new Train('BNSF Railway', 'BNSF', 'bnsf.jpg', 'operational', '1986', 'present'),
		new Train('Kansas City Southern Railway', 'KCS', 'kansasCitySouthern.jpg', 'operational', '1887', 'present'),
		new Train('Norfolk Southern Railway', 'NS', 'norfolkSouthern.jpg', 'operational', '1982', 'present'),
		new Train('Atchison, Topeka and Santa Fe Railway', 'ATSF', 'santaFe.jpg', 'merged into BNSF', '1859', '1996' ),
		new Train('Union Pacific Railroad', 'UP', 'unionPacific.jpg', 'operational', '1862', 'present'),
		new Train('North Western Railway', 'NW', 'thomasTheTankEngine.jpg', 'operational', '1946', 'present')
	]

  constructor() { }

  getTrains(){
  	return this.trains;
	}
}

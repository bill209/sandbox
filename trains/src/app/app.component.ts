import { Component } from '@angular/core';
import {Train} from "./train";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
	defaultDataChoice: number = 1;

  selectedTrain: Train;

}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


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

export class ListComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/thoughts');
  }

}

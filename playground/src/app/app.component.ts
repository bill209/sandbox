import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onePerson = { 'fname' : 'bob' , 'mi' : 'r', 'lname' : 'johnson', 'age' : 37, 'happy': true };
  sky = { 'color' : 'blue' };
  day = 'tuesday';

}

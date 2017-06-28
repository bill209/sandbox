import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funhouse',
  template: `
    <p>
      {{peep.fname + ' ' + peep.mi + '. ' + peep.lname + ' is ' + peep.age + ' years old and is ' + (peep.happy ? 'happy' : 'sad') }}
    </p>
  `,
  styles: []
})
export class FunhouseComponent implements OnInit {

  private _toy = '';

  @Input() peep: { 'fname': String, 'mi': String, 'lname': String, 'age': Number, 'happy': Boolean };
  @Input() sky: Object;
  @Input() favday: String = 'wednesday';
  @Input() set in(toy: string){
    console.log('toy: ', toy);
    this._toy = (toy && toy.trim()) || '<no toy set>';
  }

  // get toy(): string { return this._toy; }

  constructor() {
    console.log('this.favday: ', this.favday);  // wednesday
  }

  ngOnInit() {
    console.log('this.favday: ', this.favday); // tuesday
    console.log('this.sky.color: ', this.sky['color']); // blue
    this.peep.mi = 'x';
    // console.log('this.personObj: ', this.personObj);
  }

}

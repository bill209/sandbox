import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-accordion',
  templateUrl: 'src/accordion.component.html'
})
export class MyAccordionComponent {
  @Input() disableFlag: Boolean;
}
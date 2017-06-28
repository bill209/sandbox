import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBar]'
})
export class BarDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}

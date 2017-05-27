import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[my-highlight]'
})

export class HighlightDirective implements OnInit {

  @Input('my-highlight') bg: string = 'red';

  constructor (private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', this.bg);
  }
}

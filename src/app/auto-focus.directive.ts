import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[tibAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}

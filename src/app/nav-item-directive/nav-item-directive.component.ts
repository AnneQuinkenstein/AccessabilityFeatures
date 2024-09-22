import { Directive, ElementRef } from '@angular/core';
import { ListKeyManagerOption } from '@angular/cdk/a11y';

@Directive({
  standalone: true,
  selector: '[navItem]'
})
export class NavItemDirective implements ListKeyManagerOption {
  constructor(private el: ElementRef) {}

  getLabel(): string {
    return this.el.nativeElement.innerText;
  }
}

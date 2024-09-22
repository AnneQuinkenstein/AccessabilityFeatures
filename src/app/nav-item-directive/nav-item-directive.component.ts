import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {Highlightable, ListKeyManagerOption} from '@angular/cdk/a11y';

@Directive({
  standalone: true,
  selector: '[navItem]'
})
export class NavItemDirective implements Highlightable, ListKeyManagerOption {
  constructor(private el: ElementRef) {}

  @Input() disabled: boolean = false;
  private _isActive: boolean = false;

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel(): string {
    return this.el.nativeElement.innerText;
  }

}


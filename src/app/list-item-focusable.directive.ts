import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { FocusMonitor, FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appListItemFocusable]',
  standalone: true,
})
export class ListItemFocusable
  implements FocusableOption, AfterViewInit, OnDestroy
{
  /** Stream that emits when the item is focused. */
  public readonly focused = new Subject<ListItemFocusable>();

  constructor(
    public readonly elementRef: ElementRef,
    public readonly focusMonitor: FocusMonitor
  ) {}

  public ngAfterViewInit() {
    // Start monitoring the element so it gets the appropriate focused classes.
    this.focusMonitor.monitor(this.elementRef, false).subscribe((origin) => {
      if (origin) {
        this.focused.next(this);
      }
    });
  }

  public focus(origin?: FocusOrigin, options?: FocusOptions): void {
    this.elementRef.nativeElement.focus(options);
  }

  public ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.focused.complete();
  }
}

import { Directive, ElementRef, Output, EventEmitter, OnDestroy } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Directive({ selector: "[inViewport]" })
export class InViewportDirective implements OnDestroy {
  @Output("inViewport") inViewport = new EventEmitter();

  private subscription: Subscription;

  constructor(elementRef: ElementRef) {
    const element: HTMLElement = elementRef.nativeElement;

    this.subscription = fromEvent(window, "scroll")
      .pipe(
        filter(() => {
          const pageBottom = window.scrollY + window.innerHeight;
          const elementTop = element.offsetTop;
          return pageBottom > elementTop;
        })
      )
      .subscribe(() => this.inViewport.emit());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
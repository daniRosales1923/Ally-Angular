import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FragmentTargetService } from "./fragment-target.service";
import { WindowScroller } from "./window-scroller";

@Directive({ selector: "[fragmentTarget]" })
export class FragmentTargetDirective implements OnInit, OnDestroy {
  @Input() fragmentTarget: string;

  private fragmentSubscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    private windowScroller: WindowScroller,
    private targetService: FragmentTargetService
  ) {}

  ngOnInit() {
    this.fragmentSubscription = this.targetService.events$.subscribe(anchor => {
      if (anchor == this.fragmentTarget) {
        this.windowScroller.scrollIntoView(this.elementRef);
      }
    });
  }

  ngOnDestroy() {
    this.fragmentSubscription && this.fragmentSubscription.unsubscribe();
  }
}

import { ElementRef, Inject } from "@angular/core";
import { WindowScrollerOptions } from "./fragment-scroll.module";
import { WindowScroller } from "./window-scroller";
import { WINDOW_SCROLLER_OPTIONS } from "./window-scroller-token";

export class NativeWindowScroller extends WindowScroller {
  private timer: any;

  constructor(
    @Inject(WINDOW_SCROLLER_OPTIONS) private options: WindowScrollerOptions
  ) {
    super();
  }

  scrollIntoView(elementRef: ElementRef): void {
    if (this.timer) {
      this.doScroll(elementRef);
    } else {
      this.timer = setTimeout(() => this.doScroll(elementRef), 0);
    }
  }

  private doScroll({ nativeElement }: { nativeElement: HTMLElement }): void {
    nativeElement.scrollIntoView({
      behavior: this.options.behavior,
      block: "start",
    });
  }
}

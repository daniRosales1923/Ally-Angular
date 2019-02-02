import { ElementRef } from "@angular/core";

export abstract class WindowScroller {
  abstract scrollIntoView(elementRef: ElementRef): void;
}
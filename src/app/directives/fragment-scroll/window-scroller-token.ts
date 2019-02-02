import { InjectionToken } from "@angular/core";
import { WindowScrollerOptions } from "./fragment-scroll.module";

export const WINDOW_SCROLLER_OPTIONS = new InjectionToken<
  WindowScrollerOptions
>("WindowScroller.Options");

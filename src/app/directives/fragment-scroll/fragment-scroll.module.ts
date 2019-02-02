import { ModuleWithProviders } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { FragmentAnchorDirective } from "./fragment-anchor.directive";
import { FragmentTargetDirective } from "./fragment-target.directive";
import { NativeWindowScroller } from "./native-window-scroller";
import { WindowScroller } from "./window-scroller";
import { WINDOW_SCROLLER_OPTIONS } from "./window-scroller-token";
import { FragmentTargetService } from "./fragment-target.service";

export interface WindowScrollerOptions {
  behavior: "smooth" | "auto";
}

@NgModule({
  declarations: [FragmentTargetDirective, FragmentAnchorDirective],
  exports: [FragmentTargetDirective, FragmentAnchorDirective],
})
export class FragmentScrollModule {
  static forRoot(
    options: WindowScrollerOptions = { behavior: "smooth" }
  ): ModuleWithProviders {
    return {
      ngModule: FragmentScrollModule,
      providers: [
        FragmentTargetService,
        {
          provide: WINDOW_SCROLLER_OPTIONS,
          useValue: options,
        },
        {
          provide: WindowScroller,
          useClass: NativeWindowScroller,
        },
      ],
    };
  }
}

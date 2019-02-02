
import { NgModule } from '@angular/core';
import { InViewportDirective } from './in-viewport.directive';

@NgModule({
  exports: [InViewportDirective],
  declarations: [InViewportDirective],
})
export class InViewportModule { }
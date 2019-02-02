import { NgModule } from '@angular/core';
import { CounterDirective } from './counter.directive';

@NgModule({
  exports: [CounterDirective],
  declarations: [CounterDirective],
})
export class CounterModule { }
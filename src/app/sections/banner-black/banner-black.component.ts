import { Component, ViewChildren, QueryList } from '@angular/core';
import { CounterDirective } from 'src/app/directives/counter/counter.directive';

@Component({
  selector: 'banner-black',
  templateUrl: './banner-black.component.html',
  styleUrls: ['./banner-black.component.scss']
})
export class BannerBlackComponent {
  @ViewChildren(CounterDirective) counters: QueryList<CounterDirective>;

  startCounters() {
    this.counters.forEach(counter => counter.start());
  }

}

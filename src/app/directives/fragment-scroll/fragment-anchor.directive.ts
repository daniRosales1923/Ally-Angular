import { Directive, HostListener, Input } from '@angular/core';
import { FragmentTargetService } from './fragment-target.service';

@Directive({ selector: '[fragmentAnchor]' })
export class FragmentAnchorDirective {
  @Input() fragmentAnchor: string;

  constructor(private targetService: FragmentTargetService) { }

  @HostListener('click') onclick() {
    this.targetService.emit(this.fragmentAnchor);
  }
}
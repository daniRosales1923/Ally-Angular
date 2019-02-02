import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import CountUp from "countup.js";

@Directive({ 
  selector: "[counter]", 
  exportAs: "countUp"
})
export class CounterDirective implements OnInit {
  @Input() from: number = 0;
  @Input() to: number;
  @Input() duration: number = 2;
  @Input() autoStart: boolean = false;

  @Output() completed = new EventEmitter();

  private instance: CountUp;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.instance = new CountUp(
      this.elementRef.nativeElement,
      this.from,
      this.to,
      0,
      this.duration
    );
    this.autoStart && this.start();
  }

  public start() {
    this.instance.start();
  }

  public reset() {
    this.instance.reset();
  }
}
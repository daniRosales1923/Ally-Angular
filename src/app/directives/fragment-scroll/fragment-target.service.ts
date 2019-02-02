import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FragmentTargetService {

  private events: Subject<string> = new Subject();

  constructor() { }

  public emit(anchor: string) {
    this.events.next(anchor);
  }

  get events$() {
    return this.events.asObservable();
  }
}
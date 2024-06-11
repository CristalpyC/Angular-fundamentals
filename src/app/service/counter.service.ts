import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public value = 0;

  constructor() { }

  increment() {
    this.value ++
  }

  decrement(){
    this.value --
  }

  getValue(){
    return this.value
  }
}

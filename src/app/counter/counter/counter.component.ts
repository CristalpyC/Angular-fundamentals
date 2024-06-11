import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button/button.component';
import { CounterService } from '../../service/counter.service';
//import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public valor = 0;

  constructor(private counterService: CounterService) { }

  increment() {
    this.counterService.increment();
    this.valor = this.counterService.getValue();
  }
  decrement(){
    this.counterService.decrement();
    this.valor = this.counterService.getValue();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  counter: number = 0;

  constructor() { }

  increment() {
    this.counter++;
    return this.counter;
  }

  decrement() {
    this.counter--;
    return this.counter;
  }

  name: string = "";

  isDisabled: boolean = true;

  onInput(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
    if (this.name == "") {
      this.isDisabled = true;
    }
    else {
      this.isDisabled = false;
    }
  }

  clicked(): void {
    this.name = "";
  }

}

import { Component, Input } from '@angular/core';

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

  //taskName: string = "";

  allTasks: string[] = ["This is 1 task", "This is 2 task", "This is 3 task", "This is 4 task", "This is 5 task"];

  newTask: string = "";

  //isVisible: boolean = false;

  addTask(){
    console.log(this.newTask);    
  }

  add() {
    if(this.newTask) {
    this.allTasks.push(this.newTask);
    //this.isVisible = true;
    }
  }
}

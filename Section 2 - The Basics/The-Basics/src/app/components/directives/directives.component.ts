import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  inputVal = '';
  inputArray = [];
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    return this.inputVal ? 'green' : 'red';
  }

  addToList(){
    if (this.inputVal){
      this.inputArray.push(this.inputVal);
      this.inputVal = '';
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  inputVal = '';
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    return this.inputVal ? 'green' : 'red';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  clickCount = 0;
  inputVal = '';
  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.clickCount++;
  }

  onInputKeystroke(event: Event){
    this.inputVal = (event.target as HTMLInputElement).value;
  }
}

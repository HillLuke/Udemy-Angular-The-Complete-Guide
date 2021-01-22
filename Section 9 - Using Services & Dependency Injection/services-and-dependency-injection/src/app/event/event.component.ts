import { Component, OnInit, ɵConsole } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events : string[] = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.event.subscribe(val => {
      console.log(val.eventName);
      this.events.push(val.eventName);
    });
  }


}

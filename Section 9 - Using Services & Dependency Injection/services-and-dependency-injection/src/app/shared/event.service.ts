import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() event = new EventEmitter<{eventName: string}>();
  
  constructor() { }

  raiseEvent(event){    
    this.event.emit({
      eventName : event
    });
  }
}

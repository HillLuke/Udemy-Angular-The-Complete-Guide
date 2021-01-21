import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  public count:number = 0;
  public things;

  constructor(private loggingService: LoggingService, private dataService: DataService) { }

  ngOnInit(): void {
    this.things = this.dataService.getItems();
  }

  click(){
    this.count++;
    this.loggingService.LogToConsole(`button clicked ${this.count}`);
  }

  addNewItem(){
    this.dataService.addNewItem();
  }
}

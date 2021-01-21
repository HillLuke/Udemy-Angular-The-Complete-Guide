import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public listOfItems : string[] = ["item","item","item"];
  constructor() { }

  getItems(){
    return this.listOfItems;
  }

  addNewItem(){
    this.listOfItems.push("item");
  }
}

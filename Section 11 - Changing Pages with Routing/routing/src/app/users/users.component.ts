import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'aaa'
    },
    {
      id: 2,
      name: 'bbb'
    },
    {
      id: 3,
      name: 'ccc'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

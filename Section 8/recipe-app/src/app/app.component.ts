import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  linkClicked = 'recipes';

  onNavigate(linkClicked: string){
    this.linkClicked = linkClicked;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'String Interpolation';
  propertyBinding = 'Property Binding';

  constructor() { }

  ngOnInit(): void {
  }

}

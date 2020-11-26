import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

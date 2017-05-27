
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyAlertComponent } from './alert.component';

@Component({
  selector: 'my-app',
  template: `
    <my-alert></my-alert>
  `
})
export class App {
}   

@NgModule({
  imports: [BrowserModule,  NgbModule.forRoot()], 
  declarations: [App, MyAlertComponent]
  bootstrap: [App]
}) 
export class AppModule {}

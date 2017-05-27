
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyAccordionComponent } from './accordion.component';

// App component ------------------------------------

@Component({
  selector: 'my-app',
  styles: ['div { padding: 20px; }','button {margin: 20px 0}'],
  template: `
    <div>
      <button type="button" class="btn btn-sm" (click)='togglePanel()'>toggle bottom panel</button>
      <my-accordion [disableFlag]="disablePanel"></my-accordion>
    </div>
  `
})
export class App {
  disablePanel: boolean = true;
  
  togglePanel(){
    this.disablePanel = !this.disablePanel;
  }
}   

// NgModule ------------------------------------

@NgModule({
  imports: [BrowserModule,  NgbModule.forRoot()], 
  declarations: [App, MyAccordionComponent]
  bootstrap: [App]
}) 
export class AppModule { }

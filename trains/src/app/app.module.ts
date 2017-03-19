import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { TrainService } from './train.service';
import { TrainListComponent } from './train-list/train-list.component';
import { TrainItemComponent } from './train-list/train-item.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainListComponent,
    TrainItemComponent,
    TrainDetailComponent,
    TrainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

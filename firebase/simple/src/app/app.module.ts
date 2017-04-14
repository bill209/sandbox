import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ObservableComponent } from './observable.component';
import { ListComponent } from './list.component';

// Must export the config
export const firebaseConfig = {
	apiKey: 'AIzaSyDPXeRTZ6zZTcV-rCEht2kwivsQXynKx2o',
	apiKeyzzz: 'AIzaSyAM9fXabAF1eXVL59n9g2n6aMxt4M4-frA',
	authDomain: '<your-project-authdomain>',
	databaseURL: 'https://boiling-fire-3340.firebaseio.com',
	storageBucket: 'gs://boiling-fire-3340.appspot.com/',
	messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, ObservableComponent, ListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
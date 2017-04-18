import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

const myFirebaseConfig = {
  apiKey: 'AIzaSyC_W7cqGT9t-w_RocqvqaTg8csTLsC7hH8',
    authDomain: 'teste-f4b5a.firebaseapp.com',
    databaseURL: 'https://teste-f4b5a.firebaseio.com',
    projectId: 'teste-f4b5a',
    storageBucket: 'teste-f4b5a.appspot.com',
    messagingSenderId: '671973158360'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(
      myFirebaseConfig,
      myFirebaseAuthConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

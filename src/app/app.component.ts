import { Component } from '@angular/core';
import {
  AngularFire,
  AuthProviders,
  AuthMethods
} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular Fire 2!';

  constructor(public af: AngularFire) {}

  public login = () => {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

  public logout = () => {
     this.af.auth.logout();
  }

}

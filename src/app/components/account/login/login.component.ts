import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginViewModel } from '../../../shared/models/login.view-model';
import { HttpService } from '../../../shared/providers/http.service';

@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
  //  providers : [AuthenticateService]
})
export class LoginComponent {

  public user = new LoginViewModel();
  public error = '';

  constructor(private _service: HttpService) { }

    login() {
      // if (!this._service.login(this.user)) {
      //   this.errorMsg = 'Failed to login! try again ...';
      // }
      this._service.post<LoginViewModel>('Account/Login', this.user);
    }
  }

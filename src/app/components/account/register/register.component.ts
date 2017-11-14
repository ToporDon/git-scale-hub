import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterViewModel } from '../../../shared/models/register.view-model';

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  public register: RegisterViewModel;
  public error: string;

  constructor() { }

  ngOnInit() {
    this.register = new RegisterViewModel();
  }

}

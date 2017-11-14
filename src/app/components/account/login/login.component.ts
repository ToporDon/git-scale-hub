import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  title: string = 'login page';

  constructor() { }

  ngOnInit() {
  }

}
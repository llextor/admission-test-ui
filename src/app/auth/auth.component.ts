import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-user',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  implements OnInit {
  name = 'Sign in/up';
  routeTo = 'auth';
  constructor() {
  }

  ngOnInit() {
  }

}

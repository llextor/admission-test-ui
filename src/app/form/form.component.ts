import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit {
  name = 'Sign in/up';
  routeTo = 'form';
  constructor() {
  }

  ngOnInit() {
  }

}

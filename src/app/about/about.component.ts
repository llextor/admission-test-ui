import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {
  name = 'About';
  routeTo = 'about';
  constructor() {
  }

  ngOnInit() {
  }

}

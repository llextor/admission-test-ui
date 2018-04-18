import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  name = 'Contacts';
  routeTo = 'contacts';
  constructor() {
  }

  ngOnInit() {
  }

}

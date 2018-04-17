import { Component, OnInit } from '@angular/core';

import { ContactsComponent} from '../contacts/contacts.component';
import { AboutComponent } from '../about/about.component';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem = 'user';
  items: string[] = ['contacts', 'about', 'user'];
  constructor() { }
  onSelect(item: string): void {
    this.selectedItem = item;
  }
  ngOnInit() {
  }

}

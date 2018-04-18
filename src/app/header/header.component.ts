import { Component, OnInit } from '@angular/core';

import { ContactsComponent} from '../contacts/contacts.component';
import { AboutComponent } from '../about/about.component';
import { AuthComponent } from '../auth/auth.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedItem = 'about';

  items: any[] = [ new ContactsComponent, new AboutComponent, new AuthComponent ];
  onSelect (item1: string): void {
    this.selectedItem = item1;
  }
  constructor() { }
  ngOnInit() {
  }

}

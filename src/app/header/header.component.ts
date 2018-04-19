import { Component, OnInit } from '@angular/core';

import { ContactsComponent} from '../contacts/contacts.component';
import { AboutComponent } from '../about/about.component';
import { FormComponent } from '../form/form.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // selectedItem = 'about';

  items: any[] = [ new ContactsComponent, new AboutComponent, new FormComponent ];
 /* onSelect (item1: string): void {
    this.selectedItem = item1;
  }*/
  constructor() { }
  ngOnInit() {
  }

}

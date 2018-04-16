import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [

    AppComponent,
    AboutComponent,
    ContactsComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

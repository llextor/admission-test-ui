import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '/', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

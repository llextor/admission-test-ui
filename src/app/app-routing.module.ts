import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: 'form', component: FormComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'contacts',
        title: 'Contacts',
        component: ContactsComponent
        
    },
    {
        path: 'form',
        title: 'Form',
        component: FormComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

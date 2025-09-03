import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'customers/listar',
    loadComponent: () => import('./components/customer-list/customer-list').then(c => c.CustomerList)
  },
  {
    path: 'customers/crear',
    loadComponent: () => import('./components/customer-add/customer-add').then(c => c.CustomerAdd)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

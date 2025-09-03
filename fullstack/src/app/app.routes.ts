import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'customers/listar',
    loadComponent: () => import('./components/customer-list/customer-list').then(c => c.CustomerList)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

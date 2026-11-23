import { Routes } from '@angular/router';

import { Receita } from './pages/receita/receita';
export const routes: Routes = [
  { path: 'receita', component: Receita },
  { path: '', redirectTo: 'receita', pathMatch: 'full' }
];

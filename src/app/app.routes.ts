import { Routes } from '@angular/router';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Bank } from './pages/bank/bank';
import { Farma } from './pages/farma/farma';
import { Vida } from './pages/vida/vida';
import { Residencia } from './pages/residencia/residencia';
import { Protecao } from './pages/protecao/protecao';
import { Parceiros } from './pages/parceiros/parceiros';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'quem-somos', component: QuemSomos },
  { path: 'bank', component: Bank },
  { path: 'farma', component: Farma },
  { path: 'vida', component: Vida },
  { path: 'residencia', component: Residencia },
  { path: 'protecao', component: Protecao },
  { path: 'parceiros', component: Parceiros },
  { path: '**', redirectTo: '' }
];

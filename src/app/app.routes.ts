import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ZBankComponent } from './zbank/zbank.component';
import { ZFarmaComponent } from './zfarma/zfarma.component';
import { ZVidaComponent } from './zvida/zvida.component';
import { ZResidenciaComponent } from './zresidencia/zresidencia.component';
import { ZProtecaoComponent } from './zprotecao/zprotecao.component';
import { ZParceirosComponent } from './zparceiros/zparceiros.component';

const routes: Routes = [
  { path: '', component: QuemSomosComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'zbank', component: ZBankComponent },
  { path: 'zfarma', component: ZFarmaComponent },
  { path: 'zvida', component: ZVidaComponent },
  { path: 'zresidencia', component: ZResidenciaComponent },
  { path: 'zprotecao', component: ZProtecaoComponent },
  { path: 'zparceiros', component: ZParceirosComponent },
  { path: '**', redirectTo: '' } // rota fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

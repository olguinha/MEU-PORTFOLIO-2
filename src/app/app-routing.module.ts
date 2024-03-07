import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormacaoComponent } from './formacao/formacao.component';

import { SobreComponent } from './sobre/sobre.component';

import { HabilidadeComponent } from './habilidade/habilidade.component';

import { TelaDashComponent } from './tela-dash/tela-dash.component';





export const routes: Routes = [
  
  { path: 'formacao',   component:  FormacaoComponent },
  { path: 'sobre',      component:  SobreComponent },
  { path: 'habilidade', component:  HabilidadeComponent },
   {path: '',    component:  TelaDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

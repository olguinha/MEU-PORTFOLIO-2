import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormacaoComponent } from './formacao/formacao.component';

import { SobreComponent } from './sobre/sobre.component';

import { HabilidadeComponent } from './habilidade/habilidade.component';





export const routes: Routes = [
  
  { path: 'formacao',  component:  FormacaoComponent },
  { path: 'sobre',  component:  SobreComponent },
  { path: 'habilidade',  component:  HabilidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormacaoComponent } from './formacao/formacao.component';

import { SobreComponent } from './sobre/sobre.component';

import { HabilidadeComponent } from './habilidade/habilidade.component';

import { HOMEComponent } from './home/home.component';



export const routes: Routes = [
  { path: '', component: HOMEComponent},
  { path: 'formacao',  component:  FormacaoComponent },
  { path: 'sobre mim',  component:  SobreComponent },
  { path: 'habilidade',  component:  HabilidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

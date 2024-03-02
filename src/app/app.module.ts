import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { FormacaoComponent } from './formacao/formacao.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HabilidadeComponent,
    FormacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

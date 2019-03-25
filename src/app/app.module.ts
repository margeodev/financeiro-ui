import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule }        from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule }     from './pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    AppRoutingModule,
    BrowserModule,    

    CoreModule,
    LancamentosModule,
    PessoasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

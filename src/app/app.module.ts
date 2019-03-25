import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule }        from 'primeng/components/button/button';
import { CalendarModule }      from 'primeng/components/calendar/calendar';
import { DropdownModule }      from 'primeng/components/dropdown/dropdown';
import { InputMaskModule }     from 'primeng/components/inputMask/inputMask';
import { InputTextModule }     from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { MessageModule }       from 'primeng/components/message/message';
import { MessagesModule }      from 'primeng/components/messages/messages';
import { SelectButtonModule }  from 'primeng/components/selectbutton/selectbutton';
import { TableModule }         from 'primeng/components/table/table';
import { TooltipModule }       from 'primeng/components/tooltip/tooltip';

import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent }  from './lancamento-cadastro/lancamento-cadastro.component';
import { NavbarComponent }              from './navbar/navbar.component';
import { PessoasPesquisaComponent }     from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent }      from './pessoa-cadastro/pessoa-cadastro.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { MessageComponent } from './message/message.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    MessageComponent,
    LancamentosGridComponent,
    PessoasGridComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,   
    CalendarModule,
    CurrencyMaskModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    SelectButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LancamentoCadastroComponent }  from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosGridComponent }     from './lancamentos-grid/lancamentos-grid.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { SharedModule }                 from '../shared/shared.module';

import { ButtonModule }        from 'primeng/components/button/button';
import { CalendarModule }      from 'primeng/components/calendar/calendar';
import { CurrencyMaskModule }  from 'ng2-currency-mask';
import { DropdownModule }      from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule }     from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule }  from 'primeng/components/selectbutton/selectbutton';
import { TableModule }         from 'primeng/components/table/table';
import { TooltipModule }       from 'primeng/components/tooltip/tooltip';

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    CurrencyMaskModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule, 
    SelectButtonModule,   
    TableModule,
    TooltipModule,    
    
    SharedModule
  ]
})
export class LancamentosModule { }

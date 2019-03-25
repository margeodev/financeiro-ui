import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { NgModule }     from '@angular/core';

import { ButtonModule }        from 'primeng/components/button/button';
import { CalendarModule }      from 'primeng/components/calendar/calendar';
import { DropdownModule }      from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule }     from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule }  from 'primeng/components/selectbutton/selectbutton';
import { TableModule }         from 'primeng/components/table/table';
import { TooltipModule }       from 'primeng/components/tooltip/tooltip';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent }     from './pessoas-grid/pessoas-grid.component';
import { PessoaCadastroComponent }  from './pessoa-cadastro/pessoa-cadastro.component';
import { InputMaskModule } from 'primeng/components/inputMask/inputMask';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [    
    PessoaCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    CalendarModule,    
    DropdownModule, 
    InputMaskModule,   
    InputTextareaModule,
    InputTextModule, 
    SelectButtonModule,   
    TableModule,
    TooltipModule,
    
    SharedModule
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ],
})
export class PessoasModule { }

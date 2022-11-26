import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { CrudComponent } from './crud/crud.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
  ]
})
export class CandidatoModule { }
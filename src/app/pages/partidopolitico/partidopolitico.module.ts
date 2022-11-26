import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidopoliticoRoutingModule } from './partidopolitico-routing.module';
import { CrudComponent } from './crud/crud.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    PartidopoliticoRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
  ]
})
export class PartidopoliticoModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuidadanoRoutingModule } from './cuidadano-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    CuidadanoRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
  ]
})
export class CuidadanoModule { }
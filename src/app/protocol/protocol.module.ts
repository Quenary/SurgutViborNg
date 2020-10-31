import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtocolRoutingModule } from './protocol-routing.module';
import { ProtocolComponent } from './protocol.component';


@NgModule({
  declarations: [ProtocolComponent],
  imports: [
    CommonModule,
    ProtocolRoutingModule
  ]
})
export class ProtocolModule { }

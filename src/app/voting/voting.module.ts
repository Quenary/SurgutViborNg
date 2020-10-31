import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [VotingComponent],
  imports: [
    CommonModule,
    VotingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class VotingModule { }

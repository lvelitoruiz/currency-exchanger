import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '../card/card.module';

import { CardListComponent } from './card-list.component';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    CardModule
  ],
  exports: [CardListComponent]
})
export class CardListModule { }

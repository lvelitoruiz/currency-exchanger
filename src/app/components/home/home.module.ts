import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListModule } from '../card-list/card-list.module';
import { ConverterModule } from '../converter/converter.module';
import { HeaderModule } from '../header/header.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    HeaderModule,
    ConverterModule,
    CardListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

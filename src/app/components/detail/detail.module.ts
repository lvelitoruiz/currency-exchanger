import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConverterModule } from '../converter/converter.module';
import { HeaderModule } from '../header/header.module';

import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    HeaderModule,
    ConverterModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }

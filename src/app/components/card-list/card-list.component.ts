import { Component } from '@angular/core';
import { AllowedCurrencies } from 'src/app/common/constants';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  public currencies = AllowedCurrencies;

  constructor() {}

}

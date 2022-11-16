import { Component, Input } from '@angular/core';
import { Currencies } from 'src/app/common/constants';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() currency: string = Currencies.GBP;

  constructor() {}

}

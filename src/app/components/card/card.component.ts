import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() currencyName: string = '';
  @Input() currencyRate: number = 0.0;

  constructor() {}

}

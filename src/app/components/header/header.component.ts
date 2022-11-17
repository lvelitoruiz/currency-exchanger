import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Currencies } from 'src/app/common/constants';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  readonly USD = Currencies.USD;
  readonly GBP = Currencies.GBP;
  readonly EUR = Currencies.EUR;

  constructor(
    private router: Router
  ) {}

  public onClick(from: string, to: string): void {
    this.router.navigate(['detail', from, to]);
  }

}

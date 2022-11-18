import { Component, OnInit } from '@angular/core';
import { Currencies, SymbolsKey } from 'src/app/common/constants';
import { FixerService } from 'src/app/services/fixer.service';
import { Query } from 'src/app/types/fixer';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit {

  public rates: any[] = [];
  private base = Currencies.EUR;

  constructor(
    private fixer: FixerService
  ) { }

  public ngOnInit(): void {
    // get symbols from api
    this.fixer.latest(this.createQuery()).subscribe((response) => {
      if (response?.success && response?.rates) {
        this.transformRates(response?.rates);
      }
    });
  }

  private createQuery(): Query {
    return {
      symbols: this.createSymbolList(),
      base: this.base
    } as Query;
  }

  private createSymbolList(): string {
    let response = '';
    const symbols = localStorage.getItem(SymbolsKey);
    if (symbols) {
      response = Object.keys(JSON.parse(symbols)).join(',');
    }
    return response;
  }

  private transformRates(rates: any): void {
    for (const key of Object.keys(rates)) {
      this.rates.push(
        {
          currencyName: key,
          currencyRate: rates[key]
        }
      );
    }
  }

}

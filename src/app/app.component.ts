import { Component, OnInit } from '@angular/core';
import { AllowedCurrencies, SymbolsKey } from './common/constants';
import { FixerService } from './services/fixer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private fixer: FixerService
  ) { }

  public ngOnInit(): void {

    // get symbols from api
    this.fixer.symbols().subscribe((response)=> {
      this.storeSymbols((response?.success) ? JSON.stringify(response?.symbols) : AllowedCurrencies);
    });
  }

  private storeSymbols(symbols: any): void {
    localStorage.setItem(SymbolsKey, symbols);
  }
  
}

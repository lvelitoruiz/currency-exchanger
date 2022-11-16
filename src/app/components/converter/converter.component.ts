import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllowedCurrencies, Currencies } from 'src/app/common/constants';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html'
})
export class ConverterComponent implements OnInit {

  @Input() from: string = Currencies.EUR;
  @Input() to: string = Currencies.USD;
  @Input() amount: number = 100;

  public converterForm: FormGroup;

  public currencies = AllowedCurrencies;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.converterForm = this.formBuilder.group({
      from: this.from,  
      to: this.to,  
      amount: this.amount  
    });
  }

  public ngOnInit(): void { }

  public done(): void {
    console.log ('[DEBUG] done', this.converterForm);
  }

  public displayFromCurrencyLabel(): string {
    return this.converterForm?.value?.from;
  }

  public displayToCurrencyLabel(): string {
    return this.converterForm?.value?.to;
  }

}

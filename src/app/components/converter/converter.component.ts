import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllowedCurrencies, Currencies } from 'src/app/common/constants';
import { FixerService } from 'src/app/services/fixer.service';
import { ConvertQuery } from 'src/app/types/fixer';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html'
})
export class ConverterComponent implements OnChanges {

  @Input() from: string = Currencies.EUR;
  @Input() to: string = Currencies.USD;
  @Input() amount: number = 100;

  @Input() disabledFrom: boolean = false;

  public converterForm: FormGroup;

  public currencies = AllowedCurrencies;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fixer: FixerService
  ) {
    this.converterForm = this.formBuilder.group({});
  }

  public ngOnInit(): void {
    this.converterForm = this.formBuilder.group({
      from: [{ value: this.from, disabled: this.disabledFrom }],  
      to: this.to,  
      amount: this.amount  
    });

    // first call
    this.done();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.to?.currentValue) {
      this.converterForm.get('to')?.patchValue(changes?.to?.currentValue);
    }
    if (changes?.from?.currentValue) {
      this.converterForm.get('from')?.patchValue(changes?.from?.currentValue);
    }
  }

  public done(): void {
    this.fixer.convert(this.createQuery()).subscribe((response) => {
      console.log ('[DEBUG] convert', response);
      if (response?.success) {

      }
    });
  }

  public displayFromCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.from;
  }

  public displayToCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.to;
  }

  private createQuery(): ConvertQuery {
    return this.converterForm?.getRawValue() as ConvertQuery;
  }

  public onClickMoreDetails(): void {
    this.router.navigate(['detail', this.converterForm?.getRawValue()?.from, this.converterForm?.getRawValue()?.to]);
  }

}

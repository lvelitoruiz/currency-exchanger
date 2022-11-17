import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllowedCurrencies, Currencies } from 'src/app/common/constants';
import { FixerService } from 'src/app/services/fixer.service';
import { Query } from 'src/app/types/fixer';
import { CustomValidator } from 'src/app/validator/custom.validator';

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
  public unitRate: number = 0.0;
  public amountRate: number = 0.0;

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
      amount: [this.amount, CustomValidator.numeric]
    });

    this.calculateUnitRate();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.to?.currentValue) {
      this.converterForm.get('to')?.patchValue(changes?.to?.currentValue);
    }
    if (changes?.from?.currentValue) {
      this.converterForm.get('from')?.patchValue(changes?.from?.currentValue);
    }
  }

  public displayFromCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.from;
  }

  public displayToCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.to;
  }

  private createConvertQuery(): Query {
    return this.converterForm?.getRawValue() as Query;
  }

  private createUnitQuery(): Query {
    return {
      from: this.converterForm?.getRawValue()?.from,
      to: this.converterForm?.getRawValue()?.to,
      amount: 1.0
    } as Query;
  }

  public onClickMoreDetails(): void {
    this.router.navigate(['detail', this.converterForm?.getRawValue()?.from, this.converterForm?.getRawValue()?.to]);
  }

  private calculateUnitRate(): void {
    this.fixer.convert(this.createUnitQuery()).subscribe((response) => {
      console.log ('[DEBUG] calculateUnitRate', response);
      if (response?.success) {
        this.unitRate = 1.0;
      }
    });
  }

  public calculateRate(): void {
    this.fixer.convert(this.createConvertQuery()).subscribe((response) => {
      console.log ('[DEBUG] calculateRate', response);
      if (response?.success) {
        this.amountRate = 1.0;
      }
    });
  }

  public done(): void {
    if (this.converterForm.valid) {
      this.calculateRate();
    }
  }

  public onChange(): void {
    // calculate unit rate
    this.calculateUnitRate();
    // calculate amount rate
    this.calculateRate();
  }

  public onChangeAmount(): void {
    if (this.converterForm.valid) {
      // calculate amount rate
      this.calculateRate();  
    } else {
      // show errors
      console.log ('[DEBUG]', this.converterForm.errors);
    }  
  }

}

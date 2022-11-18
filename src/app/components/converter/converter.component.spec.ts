import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FixerService } from 'src/app/services/fixer.service';
import { ConverterComponent } from './converter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('ConverterComponent', () => {

  const mockFixerService = jasmine.createSpyObj('FixerService', ['convert', 'symbols', 'latest'] );
  mockFixerService.convert.and.returnValue(of({
    "date": "2022-11-18",
    "info": {
      "rate": 0.868505,
      "timestamp": 1668786663
    },
    "query": {
      "amount": 100,
      "from": "EUR",
      "to": "GBP"
    },
    "result": 86.8505,
    "success": true
  }));

  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: FixerService, useValue: mockFixerService}
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        ConverterComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call calculateUnitRate', () => {
    expect(mockFixerService.convert).toHaveBeenCalled();
  });

  it('should set unitRate', () => {
    expect(component.unitRate).toBe(86.8505);
  });

});

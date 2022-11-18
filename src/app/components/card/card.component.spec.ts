import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FixerService } from 'src/app/services/fixer.service';

import { CardComponent } from './card.component';

describe('CardComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FixerService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CardComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

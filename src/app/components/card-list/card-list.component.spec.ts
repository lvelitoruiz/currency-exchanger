import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FixerService } from 'src/app/services/fixer.service';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {

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
        CardListComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CardListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

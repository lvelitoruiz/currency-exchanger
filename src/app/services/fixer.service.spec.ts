import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { FixerService } from './fixer.service'

describe('FixerService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                FixerService
            ]
        });
    });

    it ('should be created', () => {
        const service: FixerService = TestBed.get(FixerService);
        expect(service).toBeTruthy();
    });

});
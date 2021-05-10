import { TestBed } from '@angular/core/testing';

import { CovalentApiService } from './covalent-api.service';

describe('CovalentApiService', () => {
  let service: CovalentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovalentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

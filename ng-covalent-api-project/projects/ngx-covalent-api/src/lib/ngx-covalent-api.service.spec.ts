import { TestBed } from '@angular/core/testing';

import { NgxCovalentApiService } from './ngx-covalent-api.service';

describe('NgxCovalentApiService', () => {
  let service: NgxCovalentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCovalentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

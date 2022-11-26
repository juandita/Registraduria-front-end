import { TestBed } from '@angular/core/testing';

import { CuidadanoService } from './cuidadano.service';

describe('CuidadanoService', () => {
  let service: CuidadanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuidadanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

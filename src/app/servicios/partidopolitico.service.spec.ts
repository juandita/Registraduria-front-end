import { TestBed } from '@angular/core/testing';

import { PartidopoliticoService } from './partidopolitico.service';

describe('PartidopoliticoService', () => {
  let service: PartidopoliticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidopoliticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

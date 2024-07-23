import { TestBed } from '@angular/core/testing';

import { CuentaServiceService } from './cuenta-service.service';

describe('CuentaServiceService', () => {
  let service: CuentaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CakeservicesService } from './cakeservices.service';

describe('CakeservicesService', () => {
  let service: CakeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

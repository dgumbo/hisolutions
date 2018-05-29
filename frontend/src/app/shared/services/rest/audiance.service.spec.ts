import { TestBed, inject } from '@angular/core/testing';

import { AudianceService } from './audiance.service';

describe('AudianceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudianceService]
    });
  });

  it('should be created', inject([AudianceService], (service: AudianceService) => {
    expect(service).toBeTruthy();
  }));
});

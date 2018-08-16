import { TestBed, inject } from '@angular/core/testing';

import { DistributionMethodService } from './distribution-method.service';

describe('DistributionMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributionMethodService]
    });
  });

  it('should be created', inject([DistributionMethodService], (service: DistributionMethodService) => {
    expect(service).toBeTruthy();
  }));
});

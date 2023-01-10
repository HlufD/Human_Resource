import { TestBed } from '@angular/core/testing';

import { HumanResourceService } from './human-resource.service';

describe('HumanResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumanResourceService = TestBed.get(HumanResourceService);
    expect(service).toBeTruthy();
  });
});

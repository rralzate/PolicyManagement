import { TestBed } from '@angular/core/testing';

import { ManagerPoliciesService } from './manager-policies.service';

describe('ManagerPoliciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerPoliciesService = TestBed.get(ManagerPoliciesService);
    expect(service).toBeTruthy();
  });
});

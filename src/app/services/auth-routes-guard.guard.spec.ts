import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authRoutesGuardGuard } from './auth-routes-guard.guard';

describe('authRoutesGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authRoutesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

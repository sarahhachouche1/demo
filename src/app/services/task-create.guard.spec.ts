import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { taskCreateGuard } from './task-create.guard';

describe('taskCreateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => taskCreateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

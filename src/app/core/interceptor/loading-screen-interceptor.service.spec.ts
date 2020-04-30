import { TestBed } from '@angular/core/testing';

import { LoadingScreenInterceptorService } from './loading-screen-interceptor.service';

describe('LoadinScreenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingScreenInterceptorService = TestBed.get(LoadingScreenInterceptorService);
    expect(service).toBeTruthy();
  });
});

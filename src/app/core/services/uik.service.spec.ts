import { TestBed } from '@angular/core/testing';

import { UikService } from './uik.service';

describe('UikService', () => {
  let service: UikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

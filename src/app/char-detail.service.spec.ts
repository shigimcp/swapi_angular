import { TestBed } from '@angular/core/testing';

import { CharDetailService } from './char-detail.service';

describe('CharDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharDetailService = TestBed.get(CharDetailService);
    expect(service).toBeTruthy();
  });
});

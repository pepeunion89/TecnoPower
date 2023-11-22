import { TestBed } from '@angular/core/testing';

import { MakersServiceService } from './makers-service.service';

describe('MakersServiceService', () => {
  let service: MakersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

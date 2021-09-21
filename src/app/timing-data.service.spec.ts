import { TestBed } from '@angular/core/testing';

import { TimingDataService } from './timing-data.service';

describe('TimingDataService', () => {
  let service: TimingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

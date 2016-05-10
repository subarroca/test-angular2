import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StatsService } from './stats.service';

describe('Stats Service', () => {
  beforeEachProviders(() => [StatsService]);

  it('should ...',
      inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { NgxScrollSyncService } from './ngx-scroll-sync.service';

describe('NgxScrollSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxScrollSyncService = TestBed.get(NgxScrollSyncService);
    expect(service).toBeTruthy();
  });
});

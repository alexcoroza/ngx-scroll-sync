import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollSyncSamplePageComponent } from './ngx-scroll-sync-sample-page.component';

describe('NgxScrollSyncSamplePageComponent', () => {
  let component: NgxScrollSyncSamplePageComponent;
  let fixture: ComponentFixture<NgxScrollSyncSamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScrollSyncSamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollSyncSamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

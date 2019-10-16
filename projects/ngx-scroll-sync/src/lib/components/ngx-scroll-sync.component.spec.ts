import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollSyncComponent } from './ngx-scroll-sync.component';

describe('NgxScrollSyncComponent', () => {
  let component: NgxScrollSyncComponent;
  let fixture: ComponentFixture<NgxScrollSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScrollSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

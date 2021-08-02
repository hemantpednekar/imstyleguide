import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTopNavComponent } from './ngb-top-nav.component';

describe('NgbTopNavComponent', () => {
  let component: NgbTopNavComponent;
  let fixture: ComponentFixture<NgbTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

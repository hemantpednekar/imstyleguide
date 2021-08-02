import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbPophoverComponent } from './ngb-pophover.component';

describe('NgbPophoverComponent', () => {
  let component: NgbPophoverComponent;
  let fixture: ComponentFixture<NgbPophoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbPophoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbPophoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCheckboxComponent } from './ngb-checkbox.component';

describe('NgbCheckboxComponent', () => {
  let component: NgbCheckboxComponent;
  let fixture: ComponentFixture<NgbCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

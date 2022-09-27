import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDescComponent } from './employee-desc.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDescComponent;
  let fixture: ComponentFixture<EmployeeDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

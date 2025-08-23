import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPayrollEmployees } from './view-payroll-employees';

describe('ViewPayrollEmployees', () => {
  let component: ViewPayrollEmployees;
  let fixture: ComponentFixture<ViewPayrollEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPayrollEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPayrollEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

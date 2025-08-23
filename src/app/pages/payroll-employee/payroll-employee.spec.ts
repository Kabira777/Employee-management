import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployee } from './payroll-employee';

describe('PayrollEmployee', () => {
  let component: PayrollEmployee;
  let fixture: ComponentFixture<PayrollEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component,OnInit,signal} from '@angular/core';
import {Router} from '@angular/router';
import { Master } from '../../service/master';
import {FormsModule} from '@angular/forms';
import { PayrollEmployeeList } from '../../model/class/PayrollEmployeeList';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-payroll-employee',
  imports: [FormsModule,NgIf],
  templateUrl: './payroll-employee.html',
  styleUrl: './payroll-employee.css'
})
export class PayrollEmployee {

  employees: PayrollEmployeeList[] = [];   // will store employee list
  errorMessage: string = '';

  constructor(private masterService: Master) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

 loadEmployees(): void {
  const accessCode = "S82D9E4B9G2SD68SDF";
  const loginId='SuperAdmin';

  this.masterService.getPayrollEmployeeList(accessCode, loginId)
    .subscribe({
      next: (res) => {
        console.log("Full API Response: ", res);

        
        if (res && res.Data) {
          this.employees = res.Data;
        } else {
          this.employees = [];
        }

        console.log("Employees extracted: ", this.employees);
      },
      error: (err) => {
        this.errorMessage = "Error fetching employees.";
        console.error(err);
      }
    });
}

}

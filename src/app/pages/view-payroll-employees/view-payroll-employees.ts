import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';
import { PayrollEmployeeList } from '../../model/class/PayrollEmployeeList';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-view-payroll-employees',
  imports: [NgIf],
  templateUrl: './view-payroll-employees.html',
  styleUrl: './view-payroll-employees.css'
})
export class ViewPayrollEmployees implements OnInit {

  employee: PayrollEmployeeList | null = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private masterService: Master) {}

  ngOnInit(): void {
    const empId = Number(this.route.snapshot.paramMap.get('id'));
    const accessCode = localStorage.getItem('accessCode')!;
    const loginId = localStorage.getItem('username')!;

    this.masterService.getPayrollEmployeeList(accessCode, loginId).subscribe({
      next: (res) => {
        if (res && res.Data) {
          const found = res.Data.find((e: any) => e.EmployeeID === empId);
          if (found) {
            this.employee = found;
          } else {
            this.errorMessage = 'Employee not found';
          }
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error fetching employee details.';
      }
    });
  }

  handleImageError(event: Event) {
  (event.target as HTMLImageElement).src = 'assets/dummy4.png';
}


}

// PayrollEmployeeList.ts
export class PayrollEmployeeList {
  EmployeeID: number;
  EmpCode: string;
  EmpName: string;
  EmpMobNo: string;
  DepartmentID: number;
  DepartmentName: string;
  DesignationID: number;
  DesignationName: string;

  constructor() {
    this.EmployeeID = 0;
    this.EmpCode = '';
    this.EmpName = '';
    this.EmpMobNo = '';
    this.DepartmentID = 0;
    this.DepartmentName = '';
    this.DesignationID = 0;
    this.DesignationName = '';
  }
}


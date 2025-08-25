export class PayrollEmployeeList {
  EmployeeID: number;
  EmpCode: string;
  EmpName: string;
  FName: string;
  DOB: string;
  EmpMobNo: string;
  EmpEmailID: string;
  DepartmentName: string;
  DesignationName: string;
  EmpAddress: string;
  EmployeePhotoPath: string;
  BankName: string;
  AccountNo: string;
  IFSCCode: string;
  GenderName: string;
  CityName: string;
  StateName: string;
  DOJ: string;
  SalaryRoleName: string;
  MonthlyCTC: number;
  AnnualCTC: number;

  constructor() {
    this.EmployeeID = 0;
    this.EmpCode = '';
    this.EmpName = '';
    this.FName = '';
    this.DOB = '';
    this.EmpMobNo = '';
    this.EmpEmailID = '';
    this.DepartmentName = '';
    this.DesignationName = '';
    this.EmpAddress = '';
    this.EmployeePhotoPath = '';
    this.BankName = '';
    this.AccountNo = '';
    this.IFSCCode = '';
    this.GenderName = '';
    this.CityName = '';
    this.StateName = '';
    this.DOJ = '';
    this.SalaryRoleName = '';
    this.MonthlyCTC = 0;
    this.AnnualCTC = 0;
  }
}

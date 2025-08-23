import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IProject,IProjectEmployee,IDashboardResponse} from '../model/interface/master';
import {EmployeeMaster} from '../model/class/EmployeeMaster';
import { PayrollEmployeeList } from '../model/class/PayrollEmployeeList';


@Injectable({
  providedIn: 'root'
})
export class Master {
    constructor(private http:HttpClient){}

  apiUrl: string = "/api/EmployeeManagement/";
 apiUrlPayroll:string="https://payroll.influxinfotech.in.net/SSAPI/";

  getAllDept():Observable<IApiResponse>{
   
     return this.http.get<IApiResponse>(`${this.apiUrl}GetParentDepartment`);
  }
  
   getChildDeptById(deptId:number):Observable<IApiResponse>{
   
     return this.http.get<IApiResponse>(`${this.apiUrl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  saveEmp(obj:EmployeeMaster):Observable<IApiResponse>{
   debugger;
     return this.http.post<IApiResponse>(`${this.apiUrl}CreateEmployee`,obj);
  }

  getAllEmp():Observable<EmployeeMaster[]>{
  
     return this.http.get<EmployeeMaster[]>(`${this.apiUrl}GetAllEmployees`);
  }

  updateEmp(obj:EmployeeMaster):Observable<IApiResponse>{
   debugger;
     return this.http.put<IApiResponse>(`${this.apiUrl}UpdateEmployee/${obj.employeeId}`,obj);
  }

  deleteEmp(id:number):Observable<IApiResponse>{
   debugger;
     return this.http.delete<IApiResponse>(`${this.apiUrl}DeleteEmployee/${id}`);
  }

  saveProject(obj:EmployeeMaster):Observable<IProject>{
   debugger;
     return this.http.post<IProject>(`${this.apiUrl}CreateProject`,obj);
  }

   getAllProjects():Observable<IProject[]>{
  
     return this.http.get<IProject[]>(`${this.apiUrl}GetAllProjects`);
  }

  getProjectById(id:number):Observable<IProject>{
  
     return this.http.get<IProject>(`${this.apiUrl}GetProject/${id}`);
  }

   updateProject(obj:IProject):Observable<IProject>{
   debugger;
     return this.http.put<IProject>(`${this.apiUrl}UpdateProject/${obj.projectId}`,obj);
  }

  deleteProject(id:number):Observable<IProject>{
   debugger;
     return this.http.delete<IProject>(`${this.apiUrl}DeleteProject/${id}`);
  }

   getProjectEmp():Observable<IProjectEmployee[]>{
  
     return this.http.get<IProjectEmployee[]>(`${this.apiUrl}GetAllProjectEmployees`);
  }
  
  saveProjectEmp(obj:IProjectEmployee):Observable<IProject>{
   debugger;
     return this.http.post<IProject>(`${this.apiUrl}CreateProjectEmployee`,obj);
  }

   updateProjectEmp(obj:IProjectEmployee):Observable<IProjectEmployee>{
   debugger;
     return this.http.put<IProjectEmployee>(`${this.apiUrl}UpdateProjectEmployee/${obj.empProjectId}`,obj);
  }

  deleteProjectEmp(id:number):Observable<IProjectEmployee>{
   debugger;
     return this.http.delete<IProjectEmployee>(`${this.apiUrl}DeleteProjectEmployee/${id}`);
  }

  getDashboardData():Observable<any>{
   return this.http.get<any>(this.apiUrl+"GetDashboard");
  }

   //Payroll APIs
  login(loginId: string, password: string): Observable<any> {
  const url = this.apiUrlPayroll+"GetUserDate";
  const params = {
    AccessCode: 'S82D9E4B9G2SD68SDF',  
    LoginID: loginId,
    uPass: password
  };

  return this.http.get<any>(url, { params });
}


getPayrollEmployeeList(accessCode: string, loginId: string): Observable<{ StatusCode: number, Message: string, Data: PayrollEmployeeList[] }> {
  const url = `${this.apiUrlPayroll}/GetEmployeeList?AccessCode=${accessCode}&LoginID=${loginId}`;
  return this.http.get<{ StatusCode: number, Message: string, Data: PayrollEmployeeList[] }>(url);
}

}

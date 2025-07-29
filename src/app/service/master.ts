import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IProject } from '../model/interface/master';
import {EmployeeMaster} from '../model/class/EmployeeMaster';

@Injectable({
  providedIn: 'root'
})
export class Master {
    constructor(private http:HttpClient){}

  apiUrl: string = "/api/EmployeeManagement/";


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
}

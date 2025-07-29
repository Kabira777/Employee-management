export interface IApiResponse {
    message:string;
    result:boolean;
    data:any;
}

export interface IParentDept {
    departmentId:number;
    departmentName:string;
    departmentLogo:string;
}

export interface IChildDept {
    childDeptId:number;
    parentDeptId:number;
    departmentName:string;
}

export interface IProject {
    projectId:number;
    projectName:number;
    clientName:string;
    startDate:number;
    leadByEmpId:number;
    contactPerson:string;
    contactNo:number;
    emailId:number;
}




 
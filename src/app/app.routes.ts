import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employee } from './pages/employee/employee';
import { Project } from './pages/project/project';
import { ProjectEmployee } from './pages/project-employee/project-employee';
import { ProjectForm } from './pages/project-form/project-form';
import { PayrollEmployee } from './pages/payroll-employee/payroll-employee';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },

    {
        path:'login',
        component:Login
    },
    {
      path:'',
      component:Layout,
      children:[
        {
            path:'dashboard',
            component:Dashboard
        },
        {
            path:'employee',
            component:Employee
        },
        {
            path:'payroll-employee',
            component:PayrollEmployee
        },
         {
            path:'new-project/:id',
            component:ProjectForm
        },
        
        {
            path:'project',
            component:Project
        },
         {
            path:'project-employee',
            component:ProjectEmployee
        }

      ]
    }

];

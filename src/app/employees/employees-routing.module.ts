import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent, pathMatch: 'full' },
  { path: 'add', component: AddEmployeeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}

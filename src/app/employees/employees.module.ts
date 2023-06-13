import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddEmployeeComponent, EmployeesListComponent],
  imports: [
    EmployeesRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
})
export class EmployeesModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [FormsModule, HttpClientModule],
  providers: [EmployeeService],
  exports: [AddEmployeeComponent],
})
export class EmployeesModule {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  employee!: Employee;
  subs: Subscription = new Subscription();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.subs.add(
      this.employeeService.employee.subscribe(emp => (this.employee = emp))
    );
  }

  onSave() {
    this.subs.add(
      this.employeeService
        .save(this.employee)
        .subscribe({ error: err => console.log(err) })
    );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}

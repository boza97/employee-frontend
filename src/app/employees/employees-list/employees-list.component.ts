import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  loading = true;
  employees!: Employee[];
  subs: Subscription = new Subscription();

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.employeeService.employees.subscribe(empArray => {
        this.employees = empArray;
        this.loading = false;
      })
    );
    this.subs.add(this.employeeService.getAll().subscribe());
  }

  goToAddEmployee() {
    this.router.navigate(['/employees', 'add']);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}

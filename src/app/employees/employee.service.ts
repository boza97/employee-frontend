import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  private apiUrl = `${environment.apiBaseUrl}/employee`;
  private _employee = new BehaviorSubject<Employee>({
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
  });

  constructor(private httpClient: HttpClient) {}

  get employee() {
    return this._employee.asObservable();
  }

  save(employee: Employee) {
    return this.httpClient
      .post<Employee>(this.apiUrl, employee)
      .pipe(tap(emp => this._employee.next(emp)));
  }
}

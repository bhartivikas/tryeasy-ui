import { Injectable } from '@angular/core';
import {
  EmployeeCreationRequest,
  EmployeeCreationRequestDto,
} from '../model/employee-registration.model';
import { HttpClient } from '@angular/common/http';

const EMPLOYEE_BASE_URL = 'http://localhost:9000/api/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  saveEmployee(employee: EmployeeCreationRequestDto) {
    const empCreReq: EmployeeCreationRequest = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      gender: employee.gender,
    };

    console.log(empCreReq);
    this.httpClient
      .post(EMPLOYEE_BASE_URL, empCreReq)
      .subscribe((data) => console.log(data));
  }
}

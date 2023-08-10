import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css'],
})
export class EmployeeRegistrationComponent {
  empRegForm = this.fb.group({
    firstName: [],
    lastName: [],
    fatherName: [],
    motherName: [],
    spouseName: [],
    gender: [],
    birthDate: [],
    anniversaryDate: [],
    isMarried: [],
  });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  onRegister() {
    console.log(this.empRegForm.value);
    this.employeeService.saveEmployee({
      firstName: this.empRegForm.value.firstName,
      lastName: this.empRegForm.value.lastName,
      gender: this.empRegForm.value.gender,
    });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(private http: HttpClient, private router: Router) {}

  data = new FormGroup({
    employeeName: new FormControl(),
    profileImage: new FormControl(),
    employeeGender: new FormControl(),
    employeeDepartment: new FormControl(),
    employeeSalary: new FormControl(),
    startDate: new FormControl(),
    employeeNotes: new FormControl(),
  });

  show() {
    console.log(this.data.value);
    this.addEmployeeData();
  }

  addEmployeeData() {
    const url = 'http://localhost:8080/user/reg';

    this.http.post(url, this.data.value, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
        // Handle the response text here
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}

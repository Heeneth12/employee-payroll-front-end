import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent {
  @Input() employeeId: any;

  constructor(private http: HttpClient, private router: Router) {}

  editData = new FormGroup({
    employeeName: new FormControl(),
    profileImage: new FormControl(),
    employeeGender: new FormControl(),
    employeeDepartment: new FormControl(),
    employeeSalary: new FormControl(),
    startDate: new FormControl(),
    employeeNotes: new FormControl(),
  });

  showData() {
    console.log(this.editData.value);
    console.log('id' + this.employeeId);
  }

  editEmployeeData() {
    const url = 'http://localhost:8080/user/edit/' + this.employeeId;
    this.http.put(url, this.editData.value, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}

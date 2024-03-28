import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent {
  constructor(private http: HttpClient, private router: Router) {}

  editData = new FormGroup({
    editEmployeeName: new FormControl(),
    editProfileImage: new FormControl(),
    editEmployeeGender: new FormControl(),
    editEmployeeDepartment: new FormControl(),
    editEmployeeSalary: new FormControl(),
    editStartDate: new FormControl(),
    editEmployeeNotes: new FormControl(),
  });

  showData() {
    console.log(this.editData.value);
  }
}

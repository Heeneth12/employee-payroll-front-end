import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  userData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = 'http://localhost:8080/user/get';
    this.http.get<any>(url).subscribe((response) => {
      console.log(response);
      this.userData = response;
    });
  }
}

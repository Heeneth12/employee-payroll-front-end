import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  selectEmployee(employeeId: any) {
    this.selectedEmployeeId = employeeId;
  }
  toggle: boolean = false;
  notificationToggle: boolean = false;

  selectedEmployeeId: any;

  toggleEmployeeEditer() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  userData: any;
  deletionMessage: string | undefined; // Add a property to store the deletion message

  constructor(private http: HttpClient, private router: Router) {}

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

  deleteEmployee(id: any) {
    const url = 'http://localhost:8080/user/deleteByID/' + id;
    this.http.delete(url, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);

        this.deletionMessage = response; // Store the deletion message
        this.getData(); // Optionally, fetch updated data after deletion
        if (this.deletionMessage == 'Employee successfully deleted') {
          this.notificationToggle = true;
          console.log(this.notificationToggle);
          setTimeout(() => {
            this.notificationToggle = false;
          }, 5000); // Set timeout to make notificationToggle false after 5 seconds
        }
      },
      (error) => {
        console.error('Error occurred:', error);
        this.deletionMessage = ''; // Reset deletion message on error
      }
    );
  }
}

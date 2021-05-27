import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  getUsers(): void {
    this.http.get('').subscribe(res => {
      return res;
    }, error => {
      console.log(error);
    })
  }

  onSubmit(): void {
    console.log({firstName: this.firstName, lastName: this.lastName, password: this.password, email: this.email, address: this.address});
  }
}

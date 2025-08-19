import { Component, inject, OnInit } from '@angular/core';
import { SharedCoreService, MessageService, ApiService } from '@shared/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  msg = inject(MessageService);

  api = inject(ApiService);

  message: any = { type: "", text: "" };

  employee = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl('')
  });


  ngOnInit() {
    this.msg._message.subscribe((msg: any) => {
      this.message = msg;
    })
  }

  onRegister() {
    console.log(this.employee.value.fullName);
    if (this.employee.valid && this.employee.value.fullName !== "" && this.employee.value.email !== "" && this.employee.value.phone !== "" && this.employee.value.password !== "") {
      if (this.employee.value.password === this.employee.value.cpassword) {
        let empData = {
          fullName: this.employee.value.fullName!,
          email: this.employee.value.email!,
          phone: this.employee.value.phone!,
          password: this.employee.value.password!
        }
        this.api.registerEmployees(empData).subscribe({
          next: (data: any) => {
            console.log("Registration done", data);
            this.msg.showMessage("success", "Empployee is registered successfully!")
            this.employee.reset();
          },
          error: (err: any) => {
            console.error("not done", err);
            this.msg.showMessage("danger", "There is an Error. Try Again!");
          }
        });
      }
      else {
        this.msg.showMessage("danger", "Passwords does not match!");
      }
    }
    else {
      this.msg.showMessage("danger", "All fields are required!");
    }
  }

}

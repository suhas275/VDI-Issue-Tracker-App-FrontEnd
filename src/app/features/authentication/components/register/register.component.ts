import { User } from '@core/services/user'; 
import { CommonModule, JsonPipe } from '@angular/common';
import {  FormsModule, NgForm} from '@angular/forms';
import { UserService } from '@core/services/user-service.service'; 
import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule,JsonPipe, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent {

user: User = new User();
showSuccessMessage = false;
showErrorForDuplicateUser = false;

constructor(private userService: UserService, private router: Router) {}

userregister() {
  this.userService.registerUser(this.user)
    .subscribe(
      (response: any) => {
        // this.userService.setRegisteredAssociateId(this.user.associateId);// Store associateId
    
        console.log('User registered successfully:', response);
        this.showSuccessMessage = true;
        // Reset form or clear data as needed
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['/login']); // Redirect to login page after successful registration
        }, 2000);
      },
      (error: any) => {
        console.error('Error registering user:', error);
        if (error.error.msg === 'Username already exists' || error.error.msg === 'Email already exists') {
          this.showErrorForDuplicateUser = true;
          setTimeout(() => {
            this.showErrorForDuplicateUser = false;
          }, 4000);
        } else {
          // Handle other errors
        }
      }
    );
}

  // template forms validation
isFormSubmited = false ;

  User: any = {
    associateId:'',
    firstName: '',
    lastName: '',
    email:'',
    contactNumber:'',
    userName: '',
    password:'', 
    confirmPassword:''
  }

// PASSWORD field validation

  myInputValue = ''; // Bind this to your input field using [(ngModel)]

  // Validate lowercase letters
  hasLowercase(): boolean {
    const lowerCaseLetters = /[a-z]/g;
    return this.myInputValue.match(lowerCaseLetters) !== null;
  }

  // Validate capital letters
  hasUppercase(): boolean {
    const upperCaseLetters = /[A-Z]/g;
    return this.myInputValue.match(upperCaseLetters) !== null;
  }

  // Validate numbers
  hasNumber(): boolean {
    const numbers = /[0-9]/g;
    return this.myInputValue.match(numbers) !== null;
  }

  // Validate length
  hasMinimumLength(): boolean {
    return this.myInputValue.length >= 8;
  }
// password


  onSubmit(form: NgForm) {
    const isFormValid = form.valid;
   
    }
  }




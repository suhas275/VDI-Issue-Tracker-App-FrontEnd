import { Component } from '@angular/core';
import { User } from '../../services/user';
import { CommonModule, JsonPipe } from '@angular/common';
import {  FormBuilder, FormsModule, NgForm} from '@angular/forms';
import { UserservieService } from '../../services/user-service.service';
@Component({
  selector: 'app-raise-issue',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './raise-issue.component.html',
  styleUrl: './raise-issue.component.css'
})
export class RaiseIssueComponent {
  user: User = new User();
  constructor(private userservieService: UserservieService ) {}
// successmessage
showsuccessMessage = false;
  userregister() {
    console.log(this.user);
    this.userservieService.registeruser(this.user);
  }

  // template forms validation
isFormSubmited: boolean = false ;

  User: any = {
    associateId:'',
    issueType: '',
    lastName: '',
    email:'',
    contactNumber:'',
    userName: '',
    password:'', 
    confirmPassword:''
  }

  // password validation
 
  

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



  onSubmit(form: NgForm) {
    // debugger;
    const isFormValid = form.form.valid;
    this.isFormSubmited = true;
    this.showsuccessMessage= true;
    setTimeout(() => {
      this.showsuccessMessage = false;
    }, 2000); // 2 seconds in milliseconds
  }


}

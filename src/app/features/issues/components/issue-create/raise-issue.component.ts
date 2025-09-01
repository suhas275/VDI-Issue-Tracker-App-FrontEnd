
import { Component, OnInit } from '@angular/core';
import { User } from '@core/services/user';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '@core/services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-raise-issue',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent implements OnInit {
  user: User = new User();
  currentTime: Date = new Date();
  showSuccessMessage = false;
  showErrorForDuplicateIssue = false;
  isFormSubmited = false;

  User: any = {
    associateId: '',
    issueType: '',
    lastName: '',
    email: '',
    contactNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
    impactes: 1
  };

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const storedAssociateId = localStorage.getItem('associateId');
      if (storedAssociateId) {
        this.User.associateId = storedAssociateId;
      }
    }
    this.User.datetime = new Date(); // Set the current date and time
  }

  raiseIssue() {
    console.log('Submitting issue:', this.User);
    this.isFormSubmited = true;
    
    this.userService.raiseIssue(this.User)
      .subscribe(
        (response: any) => {
          console.log('Issue raised successfully:', response);
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
            // Navigate to all issues page after successful submission
            this.router.navigate(['/allissues']);
          }, 2000);
        },
        (error: any) => {
          console.error('Error raising issue:', error);
          this.showErrorForDuplicateIssue = true;
          setTimeout(() => {
            this.showErrorForDuplicateIssue = false;
          }, 4000);
        }
      );
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
}

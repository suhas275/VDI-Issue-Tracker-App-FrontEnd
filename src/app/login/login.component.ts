import { User } from '../services/user';
import {  FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserservieService } from '../services/user-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,JsonPipe,
 ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
 
//   user: User = new User();
//   constructor( private userservieService: UserservieService,private router: Router) {}
//   // successmessage
//  showsuccessMessage = false;
//   userlogin() {
//     console.log(this.user);
//     this.userservieService.registeruser(this.user);
//   }

//   // template forms validation
// isFormSubmited: boolean = false ;

//   User: any = {
//     userName: '',
//     password:''
//   }

//   // password validation
 
  

// // PASSWORD field validation

//   myInputValue = ''; // Bind this to your input field using [(ngModel)]

//   // Validate lowercase letters
//   hasLowercase(): boolean {
//     const lowerCaseLetters = /[a-z]/g;
//     return this.myInputValue.match(lowerCaseLetters) !== null;
//   }

//   // Validate capital letters
//   hasUppercase(): boolean {
//     const upperCaseLetters = /[A-Z]/g;
//     return this.myInputValue.match(upperCaseLetters) !== null;
//   }

//   // Validate numbers
//   hasNumber(): boolean {
//     const numbers = /[0-9]/g;
//     return this.myInputValue.match(numbers) !== null;
//   }

//   // Validate length
//   hasMinimumLength(): boolean {
//     return this.myInputValue.length >= 8;
//   }



//   onSubmit(form: NgForm) {
//     const isFormValid = form.form.valid;
//     this.isFormSubmited = true;  
//       this.showsuccessMessage= false;
//         this.showsuccessMessage= true;
//         setTimeout(() => {
//           this.router.navigate(['/raiseissue']); // Redirect to home page after delay
//         }, 2000); // Set delay to 1 seconds (1000 milliseconds)
      
    
//   }
// --------------------------------------
user:User =new User();
 
  // constructor(private userservieService: UserservieService){}
 constructor( private userservieService: UserservieService,private router: Router) {}

  userlogin(data:any){
 
    this.userservieService.login(data);
    this.router.navigate(['/raiseissue']);
  }
  

  
}

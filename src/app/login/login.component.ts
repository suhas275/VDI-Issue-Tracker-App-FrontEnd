import { User } from '../services/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserservieService } from '../services/user-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = new User();

  constructor(private userserviceService: UserservieService, private router: Router, private http: HttpClient) { }

  userlogin(data: any) {  
    this.userserviceService.login(this.user).subscribe((result: any) => {
        if (result.success) {
          swal('Success', 'Login successful', 'success');
          
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.setItem('associateId', result.user.associateId); // Store associateId in localStorage

          this.userserviceService.loggedIn.next(true); // Update login state in UserserviceService
          
          this.router.navigate(['/homepage']); 
        } else {
          swal('Error', 'Invalid username or password', 'error');
        }  
      });
}

}
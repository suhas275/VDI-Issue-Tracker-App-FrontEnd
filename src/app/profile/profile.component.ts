import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserservieService } from '../services/user-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private userservieService: UserservieService) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    if (typeof localStorage !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
  }

  onSubmit() {
    this.userservieService.updateUser(this.user).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        // Optionally, update the local storage with the new user data
        localStorage.setItem('user', JSON.stringify(this.user));
        // Show success message using SweetAlert
        swal("Success", "User updated successfully!", "success");
      },
      (error: any) => {
        console.error('Error updating user:', error);
        // Show error message using SweetAlert
        swal("Error", "Failed to update user!", "error");
      }
    );
  }
}

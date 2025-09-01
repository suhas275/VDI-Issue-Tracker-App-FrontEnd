
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@core/services/user-service.service';
import { User } from '@core/services/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit{  
  users: User[] = []; 
  filteredUsers: User[] = [];  
  searchForm: FormGroup;
 
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      associateId: ['']
    });
  }
  roles: string[] = [];
  AssociateId: string | null = null; // Variable to store associateId from localStorage
 
 
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.roles = user.roles;
      this.AssociateId=user.associateId;
    } else {
      console.log('No user found in local storage');
    }
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.filteredUsers = data;
    });
 
    this.searchForm.valueChanges.subscribe(() => {
      this.filterUsers();
    });
  }
  }
   
  filterUsers() {
    const { firstName, lastName, associateId } = this.searchForm.value;
 
    this.filteredUsers = this.users.filter(user =>
      (!firstName || user.firstName.toLowerCase().includes(firstName.toLowerCase())) &&
      (!lastName || user.lastName.toLowerCase().includes(lastName.toLowerCase())) &&
      (!associateId || user.associateId.toString().includes(associateId))
    );
  }
 

 
navigateToViewUser(id: number): void {    
   this.router.navigate(['/view-user', id]);  
   }  
 navigateToEditUser(id: number): void {  
     this.router.navigate(['/edit-user', id]);
     }
 
 
}


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserservieService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../services/user';
import { FormsModule } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-all-issues',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssueComponent implements OnInit {
  users: User[] = [];
  searchText = '';
  originalUsers: User[] = [];
  currentUser: User | null = null;
  isAdmin: boolean = false;

  constructor(private userservieService: UserservieService, private router: Router) {}

  ngOnInit(): void {
    this.getAllIssues();
    this.loadCurrentUser();
  }

  private getAllIssues() {
    this.userservieService.getAllIssues().subscribe((data) => {
      this.users = data;
      this.originalUsers = data;
    });
  }

  private loadCurrentUser() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
      this.isAdmin = this.currentUser?.roles.includes('ADMIN_ROLES') || false;
    }
  }

  filterIssues() {
    if (!this.searchText) {
      this.users = this.originalUsers;
    } else {
      const searchTextLower = this.searchText.toLowerCase();
      this.users = this.originalUsers.filter(user =>
        user.associateId?.toString().toLowerCase().includes(searchTextLower) ||
        user.issueType?.toLowerCase().includes(searchTextLower) ||
        user.issueSummary?.toLowerCase().includes(searchTextLower) ||
        user.status?.toLowerCase().includes(searchTextLower)
      );
    }
  }

  editIssue(user: User) {
    this.router.navigate(['/editissue', user.id]);
  }

  viewIssue(user: User) {
    this.router.navigate(['/viewissue', user.id]);
  }

  deleteIssue(user: User) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this issue!",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.userservieService.deleteIssue(user.id).subscribe(() => {
          this.users = this.users.filter(u => u.id !== user.id);
          swal('Success', 'Issue deleted successfully', 'success');
        }, () => {
          swal('Error', 'Failed to delete issue', 'error');
        });
      } else {
        swal("Your issue is safe!");
      }
    });
  }

  canEditOrDelete(user: User): boolean {
    return this.isAdmin || (this.currentUser !== null && this.currentUser.associateId === user.associateId);
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Open':
        return 'status-open';
      case 'Close':
        return 'status-close';
      case 'In Progress':
        return 'status-in-progress';
      default:
        return '';
    }
  }
}

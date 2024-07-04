import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserservieService } from '../../services/user-service.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


interface Issue {
  serialNo: number;
  associate: string;
  issue: string;
  issueType: string;
  date: Date;
  time: string;
  actions: { edit: string; delete: string }; // Actions as an object
}


@Component({
  selector: 'app-all-issues',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './all-issues.component.html',
  styleUrl: './all-issues.component.css'
})

export class AllIssuesComponent  {

  
  issues = [
    {
      slNo: 1,
      associate: 'John Doe',
      issue: 'Bug',
      issueType: 'Software',
      status: 'Open',
      date: '2024-07-01',
      time: '10:30 AM',
    },
    // Add more issue objects as needed
    
  ];
  router: any;
  editIssue(issue: any) {
    // Implement edit logic (e.g., open a modal or navigate to an edit page)
    alert(`Editing issue: ${issue.issue}`);
  }

  deleteIssue(issue: any) {
    // Implement delete logic (e.g., prompt for confirmation and remove from array)
    const confirmDelete = confirm(`Are you sure you want to delete issue: ${issue.issue}?`);
    if (confirmDelete) {
      // Remove the issue from the array (you'll need to find the index first)
      // Example: this.issues.splice(index, 1);
      alert(`Issue "${issue.issue}" deleted.`);
    }
  }
  

  viewIssue(issue: any) {
    // Navigate to the view issue component with the issue data
    this.router.navigate['/viewissue'] ;

    
  }
  
}

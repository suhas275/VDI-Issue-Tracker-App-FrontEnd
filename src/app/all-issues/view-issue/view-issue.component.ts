
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../services/user';
import { UserservieService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-issue',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink, FormsModule],
  templateUrl: './view-issue.component.html',
  styleUrl: './view-issue.component.css'
})
export class ViewIssueComponent implements OnInit {
  issue: User | undefined;
  comments: any[] = [];
  newComment: any = {
    text: '',
    sameIssue: false
  };

  constructor(private route: ActivatedRoute, private userservieService: UserservieService) {}

  ngOnInit(): void {
    const issueId = this.route.snapshot.paramMap.get('id');
    if (issueId) {
      this.userservieService.getIssueById(+issueId).subscribe(issue => {
        this.issue = issue;
      });
      this.userservieService.getCommentsByIssueId(+issueId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }

  addComment() {
    if (this.issue) {
      const comment = {
        datetime: new Date(),
        text: this.newComment.text,
        sameIssue: this.newComment.sameIssue
      };
  
      // Add the comment to the backend
      this.userservieService.addComment(this.issue.id, comment).subscribe(() => {
        // Add the comment to the local comments array
        this.comments.push(comment);
        console.log(comment);
  
        // If the user is facing the same issue, increment the impactes count
        if (this.newComment.sameIssue && this.issue) {
          this.issue.impactes++;
          this.userservieService.updateIssue(this.issue).subscribe(); // Update the issue in the backend
        }
  
        // Reset the new comment form
        this.newComment.text = '';
        this.newComment.sameIssue = false;
      }, error => {
        console.error('Error adding comment:', error);
        // Handle error appropriately
      });
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '@core/services/user-service.service';
import swal from 'sweetalert';
import { User } from '@core/services/user';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-issue',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './edit-issue.component.html',
  styleUrl: './edit-issue.component.css'
})


export class EditIssueComponent implements OnInit {
  editForm: FormGroup | undefined;
  
  submitted = false;
  User: any = {
    id:'',
    associateId:'',
    issueType: '',
    // datetime: ''
   
  }
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
       const id = params.get('id');    
    console.log(id);
    
    if (id) {
      this.userService.getIssueById(+id).subscribe((data: User) => {
        this.User = data;
      }
    );
    }
    })
    
  }
  getStatusClass() {
    switch (this.User.status) {
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
  onSubmit(form: any) {
    if (form.valid) {
      this.userService.updateIssue(this.User).subscribe(() => {
        swal('Success', 'Issue updated successfully', 'success');
        this.router.navigate(['/allissues']);
      }, () => {
        swal('Error', 'Failed to update issue', 'error');
      });
    }
  }
}


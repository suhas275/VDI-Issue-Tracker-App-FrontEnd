import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-issue',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './view-issue.component.html',
  styleUrl: './view-issue.component.css'
})
export class ViewIssueComponent {
  
}

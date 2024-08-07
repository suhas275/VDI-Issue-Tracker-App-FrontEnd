
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class UserservieService {
  constructor(private httpClient: HttpClient, private router: Router,private http: HttpClient) { }
  public loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
 
  login(user: User): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8586/auth/login', user);
  }
 
  registerUser(user: User): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8586/auth/addUser', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:8586/auth/getUsers`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`http://localhost:8586/auth/${user.id}`, user);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8586/auth/getUserByUsername/${username}`);
  }   

  logout() { 
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.loggedIn.next(false); 
    this.router.navigate(['/login']);
  } 

  //Raise Issue SERVICE
  raiseIssue(user: User): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8585/add', user);
  }
  // All Issue
  getAllIssues(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8585/all'); 
  }  
  
  //  Delete an Issue 
  deleteIssue(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8585/delete/${id}`);
  }
  // Get an Issue by ID
  getIssueById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8585/issues/${id}`);
  }


 // Update an Issue
 updateIssue(user: User): Observable<User> {
  return this.httpClient.put<User>(`http://localhost:8585/update/${user.id}`, user);
}



// Get comments by issue ID
getCommentsByIssueId(issueId: number): Observable<any[]> {
  return this.httpClient.get<any[]>(`http://localhost:8585/comments/issues/${issueId}`);
}
  
// Add a comment to an issue
addComment(issueId: number, comment: any): Observable<any> {
  return this.httpClient.post<any>(`http://localhost:8585/comments/issues/${issueId}`, comment);
}



}
 

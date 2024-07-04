
// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { User } from './user';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';


 
// @Injectable({
//   providedIn: 'root'
// })
// export class UserservieService {

// private loggedIn = new BehaviorSubject<boolean>(false);
//   http: any;
 
//   constructor(private httpClient : HttpClient , private router:Router) { }
 
//   get isLoggedIn(){
//     return this.loggedIn.asObservable();
//   }
 
//    login(data:any){
//    this.httpClient.post("http://localhost:8585/auth/login",data).subscribe((result:any)=>{
   
//    if(result.success){
//   //  console.log(result.success);
//   alert(result.msg);
 
//    localStorage.setItem("token",result.token);
//    localStorage.setItem("user",result.user);
//    this.router.navigate(['/homepage'])
//    }
//    else{
//      alert("invalid username");
//    }
   
//    })
 
// }
 
//   registeruser(user:User):void{
//    console.log(user);
 
//    this.httpClient.post<User>('http://localhost:8585/auth/addUser',user).subscribe({
//     next: response => {
//     // console.log(response);
//     }
//     });;
//   }



//   // all issue

//   // API endpoint for deleting issues (replace with your actual endpoint)
//   private deleteUrl = 'http://your-api-endpoint/issues/';


//   deleteIssue(serialNo: number) {
//     return this.http.delete(this.deleteUrl + serialNo); // Replace with your API call
//   }
// }



// ------------------
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { User } from './user';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Router } from '@angular/router';
// // import { Issue } from './issue';
// import swal from 'sweetalert';
 
 
// @Injectable({
//   providedIn: 'root'
// })
// export class UserservieService {
//   http: any;
//   private loggedIn = new BehaviorSubject<boolean>(false);
//   private currentUser: any = null;
 
//   constructor(private httpClient: HttpClient, private router: Router) { }
 
//   get isLoggedIn() {
//     return this.loggedIn.asObservable();
//   }
 
//   // getCurrentUser(){
//   //   return this.currentUser;
//   // }
 
//   login(data: any) {
//     this.httpClient.post("http://localhost:8585/auth/login", data).subscribe((result: any) => {
//       if (result.success) {
//         debugger
//         swal('Success', 'sucessfull', 'success');
//         localStorage.setItem("token", result.token);
//         localStorage.setItem("user", JSON.stringify(result.user));
//         this.loggedIn.next(true);  // Set the loggedIn state to true
//         swal('Success', 'sucessfull', 'success');
 
 
 
 
//         this.router.navigate(['/homepage']);
//       } else {
//         // alert("Invalid username or password");
//         swal('Error', 'Invalid username or password', 'error');
 
//       }
//     });
//   }
//   registerUser(user: User): Observable<any> {
//      return this.httpClient.post<User>('http://localhost:8092/auth/addUser', user); }
 
//   // raiseIssue(issue: Issue): Observable<any> {  
//   //    console.log(issue);
//   //    return this.httpClient.post<Issue>('http://localhost:9095/add', issue);
       
//   //       }
 
//   logout() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     this.loggedIn.next(false);  // Set the loggedIn state to false
//     this.router.navigate(['/login']);
//   }
 
//   registeruser(user:User):void{
//        console.log(user);
     
//        this.httpClient.post<User>('http://localhost:8585/auth/addUser',user).subscribe({
//         next: response => {
//         // console.log(response);
//         }
//         });;
//       }

//       //  all issue

//   // API endpoint for deleting issues (replace with your actual endpoint)
//   private deleteUrl = 'http://your-api-endpoint/issues/';


//   deleteIssue(serialNo: number) {
//     return this.http.delete(this.deleteUrl + serialNo); // Replace with your API call
//   }
// }

// .................................delete after
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import swal from 'sweetalert';
 
 
@Injectable({
  providedIn: 'root'
})
export class UserservieService {
 
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser: any = null;
  http: any;
 
  constructor(private httpClient: HttpClient, private router: Router) { }
 
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
 

  // raiseIssue
   
  raiseIssue(issueData: any): Observable<any> {  
    console.log(issueData);
    return this.httpClient.post<any>( 'http://localhost:8585/add',issueData);
       
       }
 
       private baseUrl = 'http://localhost:8585/all';
        getIssues(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.baseUrl}`);
    }
 
  login(data: any) {
    this.httpClient.post("http://localhost:8092/auth/login", data).subscribe((result: any) => {
      if (result.success) {
        debugger
        swal('Success', 'sucessfull', 'success');
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        this.loggedIn.next(true);  // Set the loggedIn state to true
        swal('Success', 'sucessfull', 'success');
 
 
 
 
        this.router.navigate(['/homepage']);
      } else {
        // alert("Invalid username or password");
        swal('Error', 'Invalid username or password', 'error');
 
      }
    });
  }
  registerUser(user: User): Observable<any> {
     return this.httpClient.post<User>('http://localhost:8092/auth/addUser', user); }
 

 
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.loggedIn.next(false);  // Set the loggedIn state to false
    this.router.navigate(['/login']);
  }
     //  ------------------all issue

  // API endpoint for deleting issues (replace with your actual endpoint)
  private deleteUrl = 'http://your-api-endpoint/issues/';

  deleteIssue(serialNo: number) {
    return this.http.delete(this.deleteUrl + serialNo); // Replace with your API call
  }
 
  registeruser(user:User):void{
           console.log(user);
         
           this.httpClient.post<User>('http://localhost:8585/auth/addUser',user).subscribe({
            next: response => {
            // console.log(response);
            }
            });;
          }

          
    
}




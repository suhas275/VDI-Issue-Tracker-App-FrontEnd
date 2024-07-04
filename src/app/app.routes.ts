import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RaiseIssueComponent } from './home-page/raise-issue/raise-issue.component';
import { AllUsersComponent } from './home-page/all-users/all-users.component';
import { AllIssuesComponent } from './home-page/all-issues/all-issues.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewIssueComponent } from './home-page/all-issues/view-issue/view-issue.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'login', component: LoginComponent, },
    {path:'register', component:RegisterComponent, },
    {path:'homepage', component:HomePageComponent,},
    {path:'raiseissue', component:RaiseIssueComponent,},
    {path:'allusers', component:AllUsersComponent, },
    {path:'allissues', component:AllIssuesComponent, },
    {path:'viewissue', component:ViewIssueComponent, },
    
    
    

];


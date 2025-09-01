import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { RaiseIssueComponent } from './features/issues/components/issue-create/raise-issue.component';
import { AllUsersComponent } from './features/users/components/user-list/all-users.component';
import { LoginComponent } from './features/authentication/components/login/login.component';
import { RegisterComponent } from './features/authentication/components/register/register.component';
import { ViewIssueComponent } from './features/issues/components/issue-list/view-issue/view-issue.component';
import { ProfileComponent } from './features/users/components/user-profile/profile.component';
import { authguardGuard } from './core/guards/authguard.guard';
import { EditIssueComponent } from './features/issues/components/issue-list/edit-issue/edit-issue.component';
import { AllIssueComponent } from './features/issues/components/issue-list/all-issues.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'login', component: LoginComponent, },
    {path:'register', component:RegisterComponent, },
    {path:'homepage', component:HomePageComponent,canActivate:[authguardGuard]},
    {path:'raiseissue', component:RaiseIssueComponent,canActivate:[authguardGuard]},
    {path:'allusers', component:AllUsersComponent, canActivate:[authguardGuard]},
    {path:'allissues', component:AllIssueComponent,canActivate:[authguardGuard] },
    {path:'viewissue', component:ViewIssueComponent, canActivate:[authguardGuard]},
    {path:'profile', component:ProfileComponent, canActivate:[authguardGuard]},
    {path:'editissue/:id', component:EditIssueComponent, canActivate:[authguardGuard]},
    { path: 'viewissue/:id', component: ViewIssueComponent, canActivate:[authguardGuard] }  

];


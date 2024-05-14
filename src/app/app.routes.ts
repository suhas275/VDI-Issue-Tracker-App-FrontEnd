import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login-component' },
    {path: 'login-component', component: LoginComponent},
    {path:'register-component', component:RegisterComponent}
];


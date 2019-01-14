import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { ProjectsComponent } from './account/projects/projects.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './cover/cover.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ProjectDetailsComponent } from './account/project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoverComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'reset',
        component: ResetComponent
      }
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'projects/:id',
        component: ProjectDetailsComponent
      }
    ]
  }
];

export const COMPONENTS = [
  AccountComponent,
  ProjectsComponent,
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  CoverComponent,
  ResetComponent,
  ProjectDetailsComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

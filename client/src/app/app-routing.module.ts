import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './cover/cover.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ProjectsComponent } from './account/projects/projects.component';
import { ProjectDetailsComponent } from './account/project-details/project-details.component';
import { JobsComponent } from './account/jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: CoverComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [ AuthGuard ],
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
    canActivate: [ AuthGuard ],
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'projects/:id',
        component: ProjectDetailsComponent
      },
      {
        path: 'projects/:id/jobs/:jobId',
        component: JobsComponent
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
  ProjectDetailsComponent,
  LogoutComponent,
  JobsComponent
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { CompanyComponent } from './pages/company/company.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/company/about/about.component';
import { PressComponent } from './pages/company/press/press.component';
import { CareersComponent } from './pages/company/careers/careers.component';
import { TeamComponent } from './pages/company/team/team.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SimulationComponent } from './pages/simulation/simulation.component';

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
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'press',
        component: PressComponent
      },
      {
        path: 'careers',
        component: CareersComponent
      },
      {
        path: 'team',
        component: TeamComponent
      }
    ]
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:product',
    component: ProductsComponent
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
        path: 'logout',
        component: LogoutComponent
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
  },
  {
    path: 'simulate',
    component: SimulationComponent
  },
  { path: 'simulations', redirectTo: 'simulate', pathMatch: 'full' },
  { path: 'simulation', redirectTo: 'simulate', pathMatch: 'full' },
  { path: 'simulator', redirectTo: 'simulate', pathMatch: 'full' }
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
  JobsComponent,
  CompanyComponent,
  ProductsComponent,
  AboutComponent,
  PressComponent,
  CareersComponent,
  TeamComponent,
  DocsComponent,
  SimulationComponent
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

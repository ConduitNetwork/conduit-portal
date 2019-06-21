import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppRoutingModule, COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './cover/navbar/navbar.component';
import { AccountNavbarComponent } from './account/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BreadcrumbsComponent } from './account/breadcrumbs/breadcrumbs.component';

import { JwtModule } from '@auth0/angular-jwt';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NodeComponent } from './pages/simulation/elements/node/node.component';
import { WorkloadComponent } from './pages/simulation/elements/workload/workload.component';
import { ConfiguratorComponent } from './pages/simulation/configurator/configurator.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountNavbarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SubscribeComponent,
    ...COMPONENTS,
    NodeComponent,
    WorkloadComponent,
    ConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    UiSwitchModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FilterPipeModule,
    NgxBootstrapSliderModule,
    AngularDraggableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          'localhost:3000',
          'conduitcompute.cloud'
        ],
        blacklistedRoutes:  [
          'localhost:3000/api/auth',
          'conduitcompute.cloud/api/auth'
        ]
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

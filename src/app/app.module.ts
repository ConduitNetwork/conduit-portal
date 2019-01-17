import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule, COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './cover/navbar/navbar.component';
import { AccountNavbarComponent } from './account/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BreadcrumbsComponent } from './account/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountNavbarComponent,
    FooterComponent,
    ...COMPONENTS,
    BreadcrumbsComponent
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
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

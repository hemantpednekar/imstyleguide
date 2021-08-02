import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbTopNavComponent } from './ngb-Components/ngb-top-nav/ngb-top-nav.component';
import { NgbDropdownComponent } from './ngb-Components/ngb-dropdown/ngb-dropdown.component';
import { NgbCheckboxComponent } from './ngb-Components/ngb-checkbox/ngb-checkbox.component';
import { NgbPophoverComponent } from './ngb-Components/ngb-pophover/ngb-pophover.component';
import { NgbCollapseComponent } from './ngb-Components/ngb-collapse/ngb-collapse.component';
import { NgbAlertsComponent } from './ngb-Components/ngb-alerts/ngb-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbTopNavComponent,
    NgbDropdownComponent,
    NgbCheckboxComponent,
    NgbPophoverComponent,
    NgbCollapseComponent,
    NgbAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

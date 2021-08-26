import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { FormOrganizationComponent } from './form-organization/form-organization.component';


@NgModule({
  declarations: [
    OrganizationListComponent, FormOrganizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }

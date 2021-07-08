import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    RecoverPasswordComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { AuthActionService } from '../shared/services/auth-action.service';
import { SharedModule } from '../shared/shared.module';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,

    FormsModule,
    HttpClientModule,

    // material modules
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [AuthService],
  exports: [LoginRegisterComponent],
})
export class AuthModule {}

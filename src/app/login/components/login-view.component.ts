import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginProvider } from '../enums/login-provider';
import { LoginInformation } from '../models/login-information';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  loginForm: FormGroup;
  @Output() login = new EventEmitter<LoginInformation>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  onLogin(provider: LoginProvider) {
    const formModel = this.loginForm.value;

    this.login.emit(new LoginInformation(provider, formModel.email, formModel.password));
  }

  private createForm() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }
}

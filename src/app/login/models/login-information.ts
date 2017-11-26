import { LoginProvider } from './../enums/login-provider';

export class LoginInformation {
  constructor(public loginProvider: LoginProvider, public email: string, public password: string) {}
}

import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {UserLogin} from "../../types/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent{
  user: UserLogin = {
    email: '',
    password: '',
  };

  logoPath:string = '../../../../../assets/img/Rammstein.png';

  get isLoading(){
    return this.authService.isLoading;
  }

  constructor(private authService: AuthService,
              private router: Router) {
    if(!!localStorage.getItem("token"))
      this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  signin(){
    this.authService.login(this.user);
  }
}

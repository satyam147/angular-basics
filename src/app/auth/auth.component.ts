import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {UserModel} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage: string = '';

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.errorMessage = '';
    this.authService.login(form.value.email, form.value.password)
      .subscribe((res) => {
          let response = res as {
            email: string,
            id: string,
            name: string,
          }
          let user = new UserModel();
          user.email = response.email;
          user.id = response.id;
          user.name = response.name;
          this.authService.userSubject.next(user);
          localStorage.setItem('user',JSON.stringify(user));
          this.router.navigate(['/'])
        },
        error => {
          this.errorMessage = error.error;
        });
  }

}

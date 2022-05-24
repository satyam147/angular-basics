import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => {
      this.isUserLoggedIn = user ? true : false;
    })
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }
}

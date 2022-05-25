import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "./user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/auth/login', {
      'email': email, 'password': password
    });
  }

  autoLogin() {
    let user = localStorage.getItem('user');
    if (user) {
      let user_json = JSON.parse(user);
      let authUser = new UserModel();
      authUser.email = user_json.email;
      authUser.id = user_json.id;
      authUser.name = user_json.name;
      authUser.token = user_json.token;
      this.userSubject.next(authUser);
    }
  }
}

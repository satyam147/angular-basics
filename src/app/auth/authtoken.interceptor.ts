import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, switchMap, take} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthtokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.userSubject.pipe(take(1),
      switchMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        let request = req.clone({
          params: req.params.append('token', user.token)
        })
        return next.handle(request);
      })
    );
  }
}

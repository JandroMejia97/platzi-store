import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@core/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url} = req;
    if (!url.includes('giphy')) {
      req = this.addToken(req);
    }
    return next.handle(req);
  }

  private addToken(req: HttpRequest<any>) {
    const token = this.tokenService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          token
        }
      });
    }
    return req;
  }
}

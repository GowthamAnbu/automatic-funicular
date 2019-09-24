import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /* const headers = req.headers
      .set('Content-Type', 'application/json').set('Authorization', '213'); */
      // * common way provided by angular to set headers
    const authReq = req.clone({ setHeaders: { Authorization : '213', apikey : 'asdfvcasdfasdfasdf123'}});
    return next.handle(authReq);
  }
}

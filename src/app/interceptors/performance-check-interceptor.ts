import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PerformanceCheckInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    return next.handle(req)
    .pipe(
      tap(
        event => ok = event instanceof HttpResponse ? 'succeeded' : '',
        error => ok = 'failed',
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        console.log(`${req.method} '${req.urlWithParams}' ${ok} in ${elapsed} ms.`);
      }),
    );
  }
}

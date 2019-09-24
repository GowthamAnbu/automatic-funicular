import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './noop-interceptor';
import { HeaderInterceptor } from './header-interceptor';

export const httpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];

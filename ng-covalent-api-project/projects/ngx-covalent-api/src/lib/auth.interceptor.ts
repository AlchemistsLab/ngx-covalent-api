import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject('config') private config: any) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiToken = this.config.apiKey;

    const headers = new HttpHeaders({
      //'API-KEY': apiToken,
      Authorization: 'Basic ' + btoa(apiToken),
    });
    const cloned = req.clone({ headers });
    return next.handle(cloned);
  }
}

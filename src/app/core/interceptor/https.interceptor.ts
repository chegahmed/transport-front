import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from "@angular/common/http";

import { Observable, of } from "rxjs";

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.url.includes("localhost:8080")) {
            return next.handle(req);
        }
      // If you are calling an outside domain then do not add the token.
      // if (!req.url.match(/localhost:8080\//)) {
      //    return next.handle(req);
      // }
        console.warn("HttpsInterceptor");

        // clone request and replace 'http://' with 'https://' at the same time
        const httpsReq = req.clone({
            url: req.url.replace("http://", "https://")
        });

        return next.handle(httpsReq);
    }
}

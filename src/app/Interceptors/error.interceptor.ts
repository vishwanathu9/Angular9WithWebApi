import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class ErrorIntercept implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {

                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {

                        errorMessage = `Error: ${error.error.message}`;
                    }
                    else {
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(errorMessage);
                    return throwError(errorMessage);
                })
            )

    }
}
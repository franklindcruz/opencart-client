import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const requestUrl = `$(environment.apiEndiPoint)${req.url}`;
  const clonedRequest = req.clone({
    url: requestUrl,
  });
  return next(clonedRequest);
};

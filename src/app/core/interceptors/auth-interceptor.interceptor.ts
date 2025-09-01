import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let token: string | null = null;
  
  // Check if localStorage is available (client-side only)
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token'); // Retrieve the token from localStorage
  }

  const clonedRequest = token ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}` // Attach the token to the Authorization header 
    }
  }) : req;

  return next(clonedRequest);
};




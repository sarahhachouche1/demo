import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from 'jwt-decode';

export const managerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token') || '';
  const decoded: any = jwtDecode(token);
  const role = decoded?.Role || '';

  const isManager = role === 'Manager';

  if (isManager) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

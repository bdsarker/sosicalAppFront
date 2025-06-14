import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {AccountService} from '../services/account-service';
import {ToastService} from '../services/toast-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toast = inject(ToastService);

  if (accountService.currentUser()) return true;
  else {
    toast.error('You shall not pass');
    return false;
  }
};

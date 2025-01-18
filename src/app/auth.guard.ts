import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SellService } from './services/sell.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellService);

  if (localStorage.getItem('seller')) {
    return true;
  }
  return sellerService.isSellerloggedIn;
};

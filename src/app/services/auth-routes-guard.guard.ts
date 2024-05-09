import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authRoutesGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const localData = localStorage.getItem('uid');
  if(localData != null) {
    return true;
  }
  else{
    router.navigateByUrl('');
    return false;
  }

};

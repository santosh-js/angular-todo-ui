import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { HardcodedAuthServiceService } from '../authService/hardcoded-auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(private hardcodedAuthService: HardcodedAuthServiceService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.hardcodedAuthService.isUserLoggedIn() ? true : false;
    // if (this.hardcodedAuthService.isUserLoggedIn()) return true;
    // return false;
  }
}

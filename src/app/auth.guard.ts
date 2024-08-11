import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sharedService: SharedService, private router: Router) {}

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot): boolean {
    // Get the name using the SharedService
    const name = this.sharedService.getDisplayName();
    console.log(name);

    // Allow access if the user is on the login route or if the name is not empty
    if (route.routeConfig?.path === 'login' || name) {
      return true;
    } else {
      // Redirect to the login page if name is empty
      this.router.navigate(['/login']);
      return false;
    }
  }
}

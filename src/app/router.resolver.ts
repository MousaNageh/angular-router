import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
interface routerData {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class RouterResolver implements Resolve<routerData[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<routerData[]> | Promise<routerData[]> | routerData[] {
    return of([{ id: 1, name: 'mousa' }]);
  }
}

import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {
  }

  canActivate (
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 返回Promise<boolean | UrlTree>和Observable<boolean | UrlTree>可以执行异步逻辑
    if ((activatedRouteSnapshot.queryParams as any).isLogin === '0') {
      return this.router.createUrlTree(['/login']) // 返回UrlTree进行路由跳转
    }
    return true // 返回true 路由正常渲染
  }

}

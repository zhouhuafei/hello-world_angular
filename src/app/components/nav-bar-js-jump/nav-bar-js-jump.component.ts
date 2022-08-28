import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-nav-bar-js-jump',
  templateUrl: './nav-bar-js-jump.component.html',
  styleUrls: ['./nav-bar-js-jump.component.scss']
})
export class NavBarJsJumpComponent implements OnInit {

  routeUrl = ''
  routerSubscription: any

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routeUrl = event.urlAfterRedirects.split('?')[0]
      }
    })
  }

  ngOnInit (): void {
  }

  ngOnDestroy () {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe()
    }
  }

  jump (url: string, ext = {}) {
    this.router.navigate([url], { queryParams: { a: 1, b: 2, ...ext } })
  }

}

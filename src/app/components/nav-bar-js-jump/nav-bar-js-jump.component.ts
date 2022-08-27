import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-nav-bar-js-jump',
  templateUrl: './nav-bar-js-jump.component.html',
  styleUrls: ['./nav-bar-js-jump.component.scss']
})
export class NavBarJsJumpComponent implements OnInit {

  routeUrl = ''
  routerSubscription

  constructor (private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routeUrl = event.url
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

  jump (url: string) {
    this.router.navigate([url])
  }

}

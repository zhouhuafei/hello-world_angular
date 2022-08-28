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
        console.log('------event', event)
        console.log('------activatedRoute.snapshot', this.activatedRoute.snapshot)
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
    this.router.navigate([url], { queryParams: { a: 1, b: 2 } })
  }

}

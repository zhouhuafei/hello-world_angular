import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar-js-jump',
  templateUrl: './nav-bar-js-jump.component.html',
  styleUrls: ['./nav-bar-js-jump.component.scss']
})
export class NavBarJsJumpComponent implements OnInit {

  routeUrl = ''

  constructor (private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit (): void {
  }

  jump (url: string) {
    this.routeUrl = url
    this.router.navigate([url])
  }

}

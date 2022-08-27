import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar-js-jump',
  templateUrl: './nav-bar-js-jump.component.html',
  styleUrls: ['./nav-bar-js-jump.component.scss']
})
export class NavBarJsJumpComponent implements OnInit {

  constructor (private router: Router) {
  }

  ngOnInit (): void {
  }

  jump (path: string) {
    this.router.navigate([path])
  }

}

import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  routerSubscription: any

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit (): void {
    console.log('this.router：', this.router)
    console.log('this.activatedRoute.snapshot：', this.activatedRoute.snapshot)
    // 监听路由变化
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('监听路由变化 - event：', event)
        console.log('监听路由变化 - this.activatedRoute.snapshot：', this.activatedRoute.snapshot)
      }
    })
  }

  ngOnDestroy () {
    // 取消路由监听
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe()
    }
  }

  formFields = {
    radio1: 'radio1-1',
    checkbox1: true,
    checkbox2: [
      { value: 'checkbox2-1', checked: false },
      { value: 'checkbox2-2', checked: false },
      { value: 'checkbox2-3', checked: false }
    ]
  }

  getCheckbox2Checked () {
    return JSON.stringify(this.formFields.checkbox2.filter(v => v.checked).map(v => v.value))
  }
}

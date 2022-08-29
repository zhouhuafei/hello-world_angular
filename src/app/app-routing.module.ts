import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { MineComponent } from './pages/mine/mine.component'
import { AboutComponent } from './pages/about/about.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { title: '首页' } },
      { path: 'mine', component: MineComponent, data: { title: '我的' } },
      { path: 'about/:uid/behavior/:bid', component: AboutComponent, data: { title: '关于' } }
    ]
  },
  { path: 'login', component: LoginComponent, data: { title: '登录' } },
  { path: '**', component: NotFoundComponent, data: { title: '页面不存在' } }
]

const setGuard = (routes: Routes) => {
  routes.forEach(v => {
    if (!v.redirectTo && !v.children) {
      v.canActivate = [AuthGuard]
    }
    if (v.children) {
      setGuard(v.children)
    }
  })
}
setGuard(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

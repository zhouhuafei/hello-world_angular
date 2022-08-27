// 第三方模块放这里
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

// 自家的模块放这里
import { routes } from './app.routes'

// 自动引入的放这里
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { MineComponent } from './pages/mine/mine.component'
import { AboutComponent } from './pages/about/about.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { NavBarJsJumpComponent } from './components/nav-bar-js-jump/nav-bar-js-jump.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    AboutComponent,
    NotFoundComponent,
    NavBarComponent,
    NavBarJsJumpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

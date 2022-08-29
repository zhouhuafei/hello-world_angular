import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { MineComponent } from './pages/mine/mine.component'
import { AboutComponent } from './pages/about/about.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { NavBarJsJumpComponent } from './components/nav-bar-js-jump/nav-bar-js-jump.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    MineComponent,
    AboutComponent,
    NotFoundComponent,
    NavBarComponent,
    NavBarJsJumpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/app/base/href' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

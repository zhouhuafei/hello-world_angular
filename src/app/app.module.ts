import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'

import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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

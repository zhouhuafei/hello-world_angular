import { HomeComponent } from './pages/home/home.component'
import { MineComponent } from './pages/mine/mine.component'
import { AboutComponent } from './pages/about/about.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mine', component: MineComponent },
  { path: 'about/:uid/behavior/:bid', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
]

export { routes }

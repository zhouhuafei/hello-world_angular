import { HomeComponent } from './pages/home/home.component'
import { MineComponent } from './pages/mine/mine.component'
import { AboutComponent } from './pages/about/about.component'

const routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'mine', component: MineComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
]

export { routes }

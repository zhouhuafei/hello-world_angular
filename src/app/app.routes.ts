import { HomeComponent } from './pages/home/home.component'

const routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent }
    ]
  }
]

export { routes }

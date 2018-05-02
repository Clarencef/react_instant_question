import Home from './app/Home';
import About from './app/About';
import { Search } from './app';

export default [
  {
    path: '/home',
    component: Home,
  },{
    path: '/about',
    component: About,
  },{
    path: '/search',
    component: Search,
  }
]
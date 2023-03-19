import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import RouteBuilder from '../interfaces/Route.interface';

const routes: RouteBuilder[] = [
  { path: '/home', element: <Home />, exact: true },
  { path: '/about', element: <AboutUs />, exact: true },
];

export default routes;

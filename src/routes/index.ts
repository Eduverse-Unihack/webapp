import Classes from "../components/Classes";
import Home from "../components/Home";

type AppRoute = {
  path: string;
  component: any; // what type here?;
  isProtected?: boolean;
  isAuthPage?: boolean;
}

const APP_ROUTES: AppRoute[] = [
  {
    path: '/',
    component: Home,
    // isProtected: true
  },
  {
    path: '/classes',
    component: Classes
  }
];

export default APP_ROUTES;

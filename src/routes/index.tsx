import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/Error404';

import { People } from '../pages/People';
import { PeopleDetails } from '../pages/PeopleDetails';


const routes = createBrowserRouter([
  {
    path: "/",
    element:<People />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/people/:id",
    element:<PeopleDetails />,
  },
]);

export default routes;

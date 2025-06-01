
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Explore from '../Components/ExploreState/Explore';
import TourismChart from '../Components/TouristVisitData/TouristVisitData';
import About from '../Components/About/About';
import Layout from '../Components/Layout';


// export const AppRoutes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/explore/:stateName',
//     element: <Explore />,
//   },
//   {
//     path: '/touristGraph',
//     element: <TourismChart />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   }
// ]);
export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'explore/:stateName', element: <Explore /> },
      { path: 'touristGraph', element: <TourismChart /> },
      { path: 'about', element: <About /> },
    ]
  }
]);


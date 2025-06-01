import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

const App: React.FC = () => {
  return <RouterProvider router={AppRoutes} />;
};

export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "../src/Components/Layout";
// import Home from "../src/Components/Home/Home";
// import TourismChart from "../src/Components/TouristVisitData/TouristVisitData";
// import About from "../src/Components/About/About";
// import Explore from "./Components/ExploreState/Explore";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/toursimData" element={<TourismChart />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;


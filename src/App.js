import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
//import ExperienceCardsForm from './CompHilton.jsx/ExperienceCardsForm';
import HeaderAndSliderFromShangrila from './Sections/HeaderAndSliderFromShangrila';
import OurDestinationsFromCinnamon from './Sections/OurDestinationsFromCinnamon';
import OffersFromShangrila from './Sections/OffersFromShangrila';
import FooterFromCinnamon from './Sections/FooterFromCinnamon';
import ExperienceSomethingNewFromHilton from './Sections/ExperienceSomethingNewFromHilton';
import "./style.scss";

const Layout = () => {
  return (
    <>
      <HeaderAndSliderFromShangrila/>
      <OurDestinationsFromCinnamon />
      <ExperienceSomethingNewFromHilton />
      <OffersFromShangrila />
      <FooterFromCinnamon />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children:[
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    //   {
    //     path: "/post/:id",
    //     element: <Single />
    //   },
    //   {
    //     path: "/write",
    //     element: <Write />
    //   },
    // ]
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // }
]);

function App() {
  return (
    // <div className="App">
    //   react
    //   <ExperienceCardsForm/>
    // </div>
    <div className="app">
    <div className='container'>
    <RouterProvider router={router}/>
    </div>
  </div>
  );
}

export default App;

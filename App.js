import Text from './Text';
import './App.css';
import Album from './Component/Album';
import Footer from './Component/Footer/Footer';
import Header from './Header';
import Home from './Component/Pages/Home';
import { createBrowserRouter,RouterProvider} from "react-router-dom"
 import About from './Component/Pages/About';
 import RootLayout from './Component/Pages/RootLayout';
 import ContactUs from './Component/ContectUS/ContectUs';
// import { Children } from "react-router-dom";

import Profile from './Component/ContectUS/Authentication/Profile';
import LogIn from './Component/ContectUS/Authentication/LogIn';
import Store from './Component/Pages/Store';
import Error from './Component/Pages/Error';
function App() {
  const router = createBrowserRouter([
     { path: "/", element:<RootLayout></RootLayout>,
    errorElement :<Error></Error>,
     children:[
      { path: "/about", element:<About></About> },
      { path: "/store", element:<Store></Store> },
      { path: "/home", element:<Home></Home> },
      { path: "/contact", element:<ContactUs></ContactUs> },
      { path: "/profile", element:<Profile></Profile> },
      { path: "/login", element:<LogIn></LogIn>}
     ]
    },
  ]);

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

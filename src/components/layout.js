import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from 'react-ga';

const Layout = () => {
    // useEffect(() => {
    //     ReactGA.pageview("Layout");
    // },[]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
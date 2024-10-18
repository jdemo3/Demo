import { useEffect } from "react";
import ReactGA from 'react-ga';

const Blogs = () => {
    useEffect(() => {
        ReactGA.pageview("Blogs");
    },[]);
    return <h1>Blog Articles</h1>;
  };
  
  export default Blogs;
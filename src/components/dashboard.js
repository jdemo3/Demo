import { useEffect } from "react";
import ReactGA from 'react-ga';

function Dashboard() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    },[])
    return (
      <div >
       <p>Dashboard</p>
      </div>
    );
  }
  
  export default Dashboard;
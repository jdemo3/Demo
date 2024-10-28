
import ReactGA from 'react-ga';
import { useEffect } from "react";

  const Dashboard = () => {
   
    useEffect(() => {
        ReactGA.event({
             category: "click",
             action: "clickAction",
             label: "user Clicked on button"
         });
     },[]);


    return (
        <div>
        <p>Dashboard</p>
       </div>
    );
  };
  
  export default Dashboard;
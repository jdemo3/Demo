
import ReactGA from 'react-ga';

function Dashboard() {
    // useEffect(() => {
    //     ReactGA.pageview("Dashboard");
    // },[]);

    const click = () => {
        alert("here");
        ReactGA.event({
            category: "click",
            action: "clickAction",
            label: "user Clicked on button"
        });

    };
    return (
      <div>
       <p>Dashboard</p>
       <button onClick={click} type="submit">
            Click Me
       </button>
      </div>
    );
  };
  
  export default Dashboard;
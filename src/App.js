
import './App.css';
import ReactGA from 'react-ga';
import Dashboard from './components/dashboard';
import Layout from './components/layout';
import Blogs from './components/blogs';
import Contact from './components/contact';
import { HashRouter as Router,Navigate, Routes, Route } from 'react-router-dom';

const TRACKING_ID = "G-B15LSRRCQ1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

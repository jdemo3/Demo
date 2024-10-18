
import './App.css';
import ReactGA from 'react-ga';
import Dashboard from './components/dashboard';
import Layout from './components/layout';
import Blogs from './components/blogs';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TRACKING_ID = "G-B15LSRRCQ1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Demo" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/landing/footer/Footer.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fauect from './components/landing/Fauect/Fauect.js';
import Navbar from './components/landing/header/Navbar.js';


function App() {
  return (
    <>
      <ToastContainer style={{ fontSize: 20 }} />
      {/* <Navbar/> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path="/Fauect" component={Fauect} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

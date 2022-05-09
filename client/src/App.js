import React from 'react'
import './App.css';
import Header from './components/Homepages/Header'
import Navbar from './components/Homepages/Navbar'
import About from './components/Homepages/About'
import Education from './components/Homepages/Education'
import Experience from './components/Homepages/Experience'
import Projects from './components/Homepages/Projects'
import Contact from './components/Homepages/Contact'
import Footer from './components/Homepages/Footer'
import Login from './components/Homepages/Login'
// admin components
import Admin from './components/adminComponents/Admin';
// edit components
import EditAbout from './components/editComponents/EditAbout';
import EditEducation from './components/editComponents/EditEducation';
import EditProjects from './components/editComponents/EditProjects';
import EditExperience from './components/editComponents/EditExperience';

import {Route} from 'react-router-dom';
import {Element} from 'react-scroll';


function App() {





  return (
    <div className="App">

      {/* navbar */}

      <Navbar />

    <Element className='Home'>
      <Route exact path="/" component={Header} />
    </Element>

    <Element className='About'>
      <Route exact path="/" component={About} />
    </Element>

    <Element className='Education'>
      <Route exact path="/" component={Education} />
    </Element>

    <Element className='Projects'>
      <Route exact path="/" component={Projects} />
    </Element>


    <Element className='Experience'>
      <Route exact path="/" component={Experience} />
    </Element>

    <Element className='Contact'>
      <Route exact path="/" component={Contact} />
    </Element>

  


      <Route exact path="/login" render={()=><Login  />} />
      
      <Route exact path="/admin" render={()=><Admin />} />

      <Route exact path="/edit/:id" component={EditAbout} />
     
      <Route exact path="/editEducation/:id" component={EditEducation} />
      <Route exact path="/editProject/:id" component={EditProjects} />
      <Route exact path="/editExperience/:id" component={EditExperience} />

      <Route component={Footer} />



    



    </div>
  );
}

export default App;




// https://www.udemy.com/course/mern-stack-portfolio/?couponCode=0757DFF2E776B6082081
// https://www.udemy.com/course/mern-stack-portfolio/?couponCode=276CC7AAC2CBC62452A9
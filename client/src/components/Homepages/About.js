import React, { useContext } from 'react';
import { DataContext } from '../context/GlobalContext';


const About = () => {

  const state = useContext(DataContext);
  const [about] = state.about;
  // console.log(about);



  return (
    <div className='main-container'>
      <div className="about">
        <h2 className="title">
          About

        </h2>
        <div className="skills">
          <h3>Summary</h3>
          <p>Full Stack Web Developer with a Mechanical Engineering Degree and background in design of Automated Machinery and Military projects. Love of creating better ways to get things accomplished.
            Known by my coworkers and staff to have a strong desire and drive to succeed on whatever venture taken on.</p>
        </div>
        <div className="skills">
          <h4>Skills(Tech)</h4>
          <p>JavaScript, HTML, CSS, Bootstrap, Node.js, React, MySql, NoSql, MongoDB, Heroku, Git, GitHub, Azure, Java, Python, Excel,
            Cybersecurity, Intro to Linux, OOP, JQuery, MERN, Express.js
          </p>
        </div>
        <div className="skills">
          <h4>Soft Skills</h4>
          <p>Sales, Public Speaking, Team leadership, Virtual Training, Time Management, Customer Service, Recruiting, Motivation</p>
        </div>








      </div>
    </div>
  )
}

export default About

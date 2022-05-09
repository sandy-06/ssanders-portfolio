import React,{useContext} from 'react';
import {DataContext} from '../context/GlobalContext';


const About = () => {

const state= useContext(DataContext);
const [about] = state.about;
// console.log(about);



    return (
        <div className='main-container'>
          <div className="about">
              <h2 className="title">
                  about
                
              </h2>
   

         {/* about */}

       {about.map(item=>(
           
     <div className="about-info" key={item._id}>
           <p>{item.about}</p>
     </div>
       ))}

          </div>
        </div>
    )
}

export default About

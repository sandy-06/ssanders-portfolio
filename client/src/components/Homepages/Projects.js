
import React,{useContext} from 'react';
// import logo from '../../images/cable.jpg';
// import arduino1 from '../../images/Arduino1.jpg';
// import panel from '../../images/panel.jpg';
// import tablet from '../../images/tablet.jpg';
import {DataContext} from '../context/GlobalContext';


 const Projects = () => {
    const state= useContext(DataContext);
    const[projects] = state.projects


    return (
        <div className="main-container">
         <div className="projects">
             <h2 className="title">Projects</h2>
             <div className="projects-center">


        {projects.map(item=>(

        
    <div className="single-project" key={item._id} >
        <div className="single-project-img">
            <img src={item.images.url} alt=""/>
        </div>

        <div className="single-project-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        </div>
    </div>


        ))}

    
             </div>
         </div>
        </div>
    )
}

export default Projects;
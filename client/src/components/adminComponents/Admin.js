import React,{useContext} from 'react';
import './admin.css';
import AboutAdmin from './AboutAdmin';
import EducationAdmin from './EducationAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ExperienceAdmin from './ExperienceAdmin';
import {DataContext} from '../context/GlobalContext';
import {Link} from 'react-router-dom';

const Admin = () => {

const state = useContext(DataContext);
const [isLogin] = state.isLogin;



    return (
        <div className="main-container">
          <br/>
           <h2 className="title">Admin forms</h2>
           {isLogin ?
           
           <div className="admin-center">

           {/* aboutAdmin component */}
           <h4 className="admin-title">About component</h4>
           <AboutAdmin />
           {/* end of aboutAdmin component */}
  
           <br/>
           <br/>
           <hr style={{border:"1px solid lightgrey"}} />
           <br/>
  
  
  
  
  
           {/* educationAdmin component */}
             <h4 className="admin-title">Education component</h4>
             <EducationAdmin />
  
            {/*end of educationAdmin component */}
            <br/>
           <br/>
           <hr style={{border:"1px solid lightgrey"}} />
           <br/>
  
            {/*projectsAdmin component */}
            <h4 className="admin-title">Projects component</h4>
             <ProjectsAdmin />
              
             {/*end of projectsAdmin component */}
         
             <br/>
           <br/>
           <hr style={{border:"1px solid lightgrey"}} />
           <br/>
  
          {/*experienceAdmin component */}
  
          <h4 className="admin-title">Experience component</h4>
             <ExperienceAdmin />
           {/*end of experienceAdmin component */}
           <br/>
  
             </div>
          
          
          
          :
          
          <div className="back_to_home">
             <div className="back_box">
               <h2>Only admin can have accesss here</h2>
               <Link to="/">Back to home</Link>
             </div>
            
            </div>}
        </div>
    )
}

export default Admin

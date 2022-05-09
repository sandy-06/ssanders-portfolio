
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';




const ExperienceAdmin = () => {

    const [experience, setExperience] = useState('');
    const [experienceData, setExperienceData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCond,setMessageCond] = useState(false);


    useEffect(()=>{

        // fetching data
        const fetchData= async()=>{
        
            try {
            
         const res = await axios.get(`/experience`);
        //  console.log(res.exprerience);
        setExperienceData(res.data);
                
          } catch (err) {
                    
         }
        
        }
        
        fetchData();
        
        },[])


// onchange
const onchangeExperience = (e)=>{
    setExperience(e.target.value);
    // console.log(experience);
   }


   // submit experience
const handleSubmit = (e)=>{
    e.preventDefault();
    
    const postExperience = {
        experience
    }
    
    
    setExperience('');
    axios.post(`/experience`, postExperience)
    .then(res=>{
    
    })
    .catch(err=>console.log(err))
    
    
    
    }



    // delete about
const deleteExperience=(id)=>{

    axios.delete(`/experience/${id}`)
    .then(res=>{
        setMessageCond(true);
        setMessage(`${res.data.msg}`);
     
      const timeout=  setTimeout(()=>{
           setMessage('');
            setMessageCond(false);
    
        },2000)

        return ()=>clearTimeout(timeout);


    }).catch(err=>console.log(err))
    
    
    
    // delete fro ui
    const experienceFilterDel = experienceData.filter(item=>item._id !==id)
    
    setExperienceData(experienceFilterDel);
    
    
    }












    return (

        <div className="same-component" >
          <div className="same-form">
              <form onSubmit={handleSubmit}>
                  <h4>Experience component</h4>
                  <label htmlFor="text">Experience</label>
                  <input type="text" onChange={onchangeExperience} value={experience}  />
                  <button type="submit">Add item</button>
              </form>
          </div>

<div className="same-item">
    <div className="about-info">
      {experienceData.map(item=>(
         <div className="same-admin" key={item._id}>
         <div className="icons">
              <Link to={`/editExperience/${item._id}`}><i className="fas fa-edit"></i></Link>
                   <i className="fas fa-trash" onClick={()=>deleteExperience(item._id)}></i>
          </div>
          {/* single experience */}
          <div className="single-experience">
      <p>{item.experience}</p>
 
          </div>
          <h3 className={messageCond?"new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
         </div>


      ))}
    </div>
</div>



        </div>
    )
}

export default ExperienceAdmin

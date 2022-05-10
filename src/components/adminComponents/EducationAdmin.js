import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const EducationAdmin = () => {

const [education, setEducation] = useState('');
const [educationData, setEducationData]=useState([]);
const [message, setMessage] = useState('');
const [messageCond,setMessageCond] = useState(false);


useEffect(()=>{

const fetchData= async()=>{
    try {
    
    const res = await axios.get(`/education`);
    // console.log(res.data);
    setEducationData(res.data)
    
    } catch (err) {
        
    }
}

fetchData();


},[])

const onChangeEducation=(e)=>{
  setEducation(e.target.value)
}



// submit education

const handleSubmit = (e)=>{
    e.preventDefault();
    
    const postEducation = {
       education
    }
    
    
    setEducation('');
    axios.post(`/education`, postEducation)
    .then(res=>{
    
    })
    .catch(err=>console.log(err))
    
    
    
    }










// delete education
const deleteEducation=(id)=>{

    axios.delete(`/education/${id}`)
    .then(res=>{
        setMessageCond(true);
        console.log(`${res.data.msg}`);
        setMessage(`${res.data.msg}`);
     
      const timeout=  setTimeout(()=>{
           setMessage('');
            setMessageCond(false);
    
        },2000)

        return ()=>clearTimeout(timeout);


    }).catch(err=>console.log(err))
    
    
    
    // delete fro ui
    const educationFilterDel = educationData.filter(item=>item._id !==id)
    
    setEducationData(educationFilterDel);
    
    
    }
    



    return (
        <div className="same-component">
           <div className="same-form">
               <form onSubmit={handleSubmit}>
                 <h4>Education Component</h4>
                 <label htmlFor="text">Education</label>
                 <input type="text" value={education} onChange={onChangeEducation}  />
                 <button type="submit">Add item</button>
               </form>
           </div>

   <div className="same-item">

   <div className="about-info">
     {educationData.map(item=>(
          
           <div className="same-admin" key={item._id}>
               <div className="icons">
             <Link to={`/editEducation/${item._id}`}><i className="fas fa-edit"></i></Link>
                  <i className="fas fa-trash"
                   onClick={()=>deleteEducation(item._id)}
                  
                  ></i>
               </div>

               <div className="single-education">
     <p>{item.education}</p>
               </div>
               <h3 className={messageCond?"new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
           
       </div>
     ))}

  </div>
   </div>





        </div>
    )
}

export default EducationAdmin

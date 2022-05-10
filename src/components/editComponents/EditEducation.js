import React,{useState,useEffect} from 'react';
import {Link,useHistory, useParams} from 'react-router-dom';
import axios from 'axios';




const EditEducation = (props) => {

const [education, setEducation] = useState('');
const [message, setMessage] = useState('');
const history = useHistory();
const {id} = useParams();


// getting the specific id
useEffect(()=>{

    axios.get(`/education/${id}`)
    .then(res=>{
        setEducation(res.data.education);
    }).catch(err=>console.log(err))
    
    
    },[id])



    
// onchange
const onchangeEducation = (e)=>{
    setEducation(e.target.value);
  
   }


   // update education
  
const updateEducation = (e)=>{
    e.preventDefault();

    const postEducation = {
        education
    }

axios.put(`/education/update/${props.match.params.id}`, postEducation)
.then(res=>{
    setMessage(res.data.msg);

}).catch(err=>console.log(err))

setEducation('');

const timeout =   setTimeout(()=>{
 history.push("/admin");
},2000)

return ()=>clearTimeout(timeout);


}





    return (
        <div className="edit">
           <div className="main-container">
               <div className="same-component">
                   <div className="same-form">
                       <form onSubmit={updateEducation}>
                           <h3 className="updated">{message}</h3>
                         <h4>Education component</h4>
                         <label htmlFor="text">Education</label>
                         <input type="text"
                          value={education}
                          onChange={onchangeEducation}
                         />
                         <div className="btns">
                             <button type="submit">Update item</button>
                             <Link to='/admin'><button className='cancel-btn'>Cancel</button></Link>
                         </div>
                       </form>
                   </div>
                </div>
             </div> 
        </div>
    )
}

export default EditEducation

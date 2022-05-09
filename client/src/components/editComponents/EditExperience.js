import React,{useEffect,useState} from 'react'
import { Link,useHistory, useParams} from 'react-router-dom';
import axios from 'axios';


const EditExperience = (props) => {

    const [experience, setExperience] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    const {id} = useParams();


// getting the specific id
useEffect(()=>{

    axios.get(`/experience/${id}`)
    .then(res=>{
        setExperience(res.data.experience);
    }).catch(err=>console.log(err))
    
    
    },[id])

    // onchange
const onchangeExperience = (e)=>{
   setExperience(e.target.value);
    // console.log(experience);
   }


   // update about
  
const updateExperience = (e)=>{
    e.preventDefault();

    const postExperience = {
       experience
    }

axios.put(`/experience/update/${props.match.params.id}`, postExperience)
.then(res=>{
    setMessage(res.data.msg);

}).catch(err=>console.log(err))

setExperience('');

 const timeout =  setTimeout(()=>{
 history.push("/admin");
},2000)

return ()=>clearTimeout(timeout);

}



    return (
        <div className='edit'>
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                <form onSubmit={updateExperience}>
    <h3 className="updated">{message}</h3>
                    <h4>Experience component</h4>
                    <label htmlFor="text">Experience</label>
                    <input type="text"
                     value={experience}
                     onChange={onchangeExperience}
                    
                    
                    />
                    <div className="btns">
                        <button type="submit" >Update item</button>
                        <Link to="/admin"><button className="cancel-btn">Cancel</button>
                        </Link>
                    </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditExperience

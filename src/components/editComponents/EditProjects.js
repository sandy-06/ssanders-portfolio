import React,{useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';





const initialState = {
    product_id:'',
    title:'',
    description:''
}


const EditProjects = (props) => {

    const [product, setProducts] = useState(initialState);
    const [images, setImages] = useState(false);
    const [message, setMessage] = useState('');
   const history = useHistory();
   const {id} = useParams();


// upload image functionality

const handleUpload = async (e)=>{

    e.preventDefault();
    
    try {
     const file=e.target.files[0];
     if(!file) return alert('no files exist')
    
     if(file.size>1024*1024){
       return alert('size is too big')
     }
    
     if(file.type !=='image/jpeg' && file.type !=='image/png'){
        return alert('incorrect file format')
     }
    
     let formData = new FormData();
    formData.append('file', file);
    
    const res = await axios.post('/upload', formData, {
        headers:{'content-type': 'multipart/form-data'}
    })
    
    setImages(res.data);
    
    
    } catch (err) {
        console.log(err.response.data.msg);
    }
    
    }



    // delete image
const handleDestroy = async ()=>{

    try {
        
    await axios.post('/destroy', {public_id:images.public_id})
     setImages(false);
    
    
    } catch (err) {
        console.log(err.response.data.msg);
    }
    
    
    }


// handle change inputs
const handleChangeInput =(e)=>{
    const {name, value} = e.target
    
    setProducts({...product, [name]:value})
    
}





    // getting data

useEffect(()=>{

axios.get(`/project/${id}`)
.then(res=>{
    // console.log(res.data)

    setProducts({

    product_id:res.data.product_id,
    title:res.data.title,
    description:res.data.description

    })
}).catch(err=>console.log(err))


},[id])



// submit the form
const handleSubmit = (e)=>{
    e.preventDefault();
 
    try {
      
     axios.put(`/project/${props.match.params.id}`, {...product, images})
     .then(res=>{
 
     setMessage(res.data.msg);
    
     })
 
    } catch (err) {
        console.log(err)
    }

   const timeout = setTimeout(()=>{
        history.push("/admin")

    },2000)

    return ()=>clearTimeout(timeout);
 
 }


 const styleUpload = {
    display:images? 'block':'none'
}







    return (
        <div className="edit">
           <div className="main-container">
               <div className="same-component">
                   <div className="same-form">
                   <form onSubmit={handleSubmit}>
                     <h3 className="updated">{message}</h3>
                   <h4>Projects components</h4>
                   <label htmlFor="text">Id</label>
                   <input type="text"
                    name="product_id" 
                     required  id="product_id" 
                     value={product.product_id}
                     onChange={handleChangeInput}
                     />

                   <label htmlFor="text">title</label>
                   <input type="text" name="title" 
                    required 
                    value={product.title}
                    onChange={handleChangeInput}
                     id="title"  />

                   <label htmlFor="text">Description</label>
                   <textarea type="text" 
                   name="description"  
                   value={product.description}
                   onChange={handleChangeInput}
                   required  id="description"  cols="30" rows="3" />

                   <div className="upload" >
                       <input type="file" 
                        name="file"
                         id="file_up" 
                         onChange={handleUpload}
                          required
                         />
                       <div id="file_img"  style={styleUpload}>
                           <img src={images?images.url:''} alt=""/>
                          <span onClick={handleDestroy}>X</span>

                       </div>

                   </div>
                   <div className="btns">
                    <button>Update item</button>
                    <Link to="/admin"><button className="cancel-btn">Cancel</button></Link>
                   </div>
               </form>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default EditProjects

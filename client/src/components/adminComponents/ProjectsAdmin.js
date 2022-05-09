import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


const initialState = {
    product_id:'',
    title:'',
    description:''
}



const ProjectsAdmin = () => {

    const [product, setProducts] = useState(initialState);
    const [images, setImages] = useState(false);
    const [message, setMessage] = useState('');
    const [messageCond, setMessageCond] = useState(false);
    const [projectData, setProjectData] = useState([]);



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


// submit the form
const handleSubmit = (e)=>{
   e.preventDefault();

   try {
     
    axios.post('/project/', {...product, images})
    .then(res=>{

    setMessage(res.data.msg);
    setTimeout(()=>{
     setMessage('');
    },2000)

    setProducts(initialState);
    setImages(false)

    })

   } catch (err) {
       
   }

}


const styleUpload = {
    display:images? 'block':'none'
}



// fetching the data
useEffect(()=>{

const fetchData = async ()=>{

    try {
      const res = await axios.get(`/project`);
      setProjectData(res.data) ;
    //   console.log(res.data)
    } catch (err) {
      console.log(err)  
    }
}

fetchData();





},[])


// delete functionality
const deleteProject = (id)=>{

axios.delete(`/project/${id}`)
.then(res=>{

    setMessageCond(true);
    setMessage(res.data.msg);

   const timeout= setTimeout(()=>{
        setMessageCond(false);
        setMessage('');

    },2000)

    return ()=>clearTimeout(timeout);
})


    // delete from clietn ui
    const filteredProject = projectData.filter(item=>item._id !==id);
    setProjectData(filteredProject);


}









    return (
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={handleSubmit}>
               <h4> Projects component </h4>

               <label htmlFor="text">id</label>
                <input type="text" 
                 name="product_id"
                  id="product_id" 
                  value={product.product_id}
                  onChange={handleChangeInput}
                  required 
                    />
                 
                 <label htmlFor="text">title</label>
                <input type="text"
                  name="title"
                   id="title"
                   value={product.title}
                   onChange={handleChangeInput}
                   required 
                    />

                <label htmlFor="text">Description</label>
                <textarea name="description"
                 id="description"
                 value={product.description}
                 onChange={handleChangeInput}
                  required   
                  cols="30" 
                  rows="3" />
                
           
              <div className="upload">
              <input type="file" name='file' id="file_up"
               onChange={handleUpload}
              />
              <div id="file_img" style={styleUpload}>
              <img src={images?images.url:''} alt=""/>
                  
                  <span onClick={handleDestroy}>X</span>
              </div>

            </div>
 
               <button  >Add item</button>
        </form>
       
       </div>
  
  
         <div className="same-item">
         <div className="about-info">
           
 {projectData.map(item=>(
 
     <div className="projects-admin" key={item._id} >
          <div className="icons">
             <Link to={`/editProject/${item._id}`}> <i className="fas fa-edit"></i></Link> 
                <i className="fas fa-trash" onClick={()=>deleteProject(item._id)}></i>  
        </div> 

       {/* single project */}
   <div className="single-project">
       <div className="single-project-img">
       <img src={item.images.url} alt=""/>
       </div>
       <div className="single-project-info">
           <h3>{item.title}</h3>
          <p>{item.description}</p>
       </div>
   </div>

   <h3 className={messageCond?"new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
    </div>



          ))}
  
         
              
              </div>
            </div>
       </div>
    )
}

export default ProjectsAdmin


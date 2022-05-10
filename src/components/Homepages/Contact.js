import React,{useState} from 'react';
import './contact.css';
import BackImg from '../../images/im4.jpg';
import load2 from '../../images/load2.gif';
import axios from 'axios';






const Contact = () => {

const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');
const[banner, setBanner] = useState('');
const[bool, setBool] = useState(false);



// handle inputs
const handleNameChange=(e)=>{
  setName(e.target.value);
//   console.log(name)
}

const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    // console.log(email)
  }

  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
    // console.log(message)
  }


//   submit form
const formSubmit = (e)=>{
e.preventDefault();

let data={
    name:name,
    email:email,
    message:message
}

setBool(true);


axios.post(`/contact`, data)
.then(res=>{
setBanner(res.data.msg);
setBool(false);
setTimeout(()=>{
setBanner('');

},2000)

setName('');
setEmail('');
setMessage('');

}).catch(err=>console.log(err))


}









    return (
        <div className="main-container" >
           <div className="contactForm">
               <h2 className="title">
                   Contact form
               </h2>
        <div className="contactForm-center">
            <div className="contact_form">
                <form onSubmit={formSubmit}>
                     <p>{banner}</p>

                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    placeholder="import name..." 
                    required 
                    value={name}
                    onChange={handleNameChange}
                    
                    />


                    <label htmlFor="email">Email</label>
                    <input type="email"
                     placeholder="import email..." 
                     required 
                     value={email}
                     onChange={handleEmailChange}
                     
                     />


                    <label htmlFor="message">Message</label>
                   <textarea  type='text'
                    name="message"
                    id=""
                     placeholder='import contact reason...' 
                     value={message}
                     onChange={handleMessageChange}
                     
                     />

                  
                  <div className="send-btn">
    <button type="submit" >Send{bool? <b className="load" ><img src={load2} alt=""/></b>:''}</button>
                  </div>

                </form>
            </div>

           {/* contact info */}
           <div className="contact-info">
               <h4>Send your message</h4>
               <img src={BackImg} alt=""/>
           </div>


        </div>
           </div>
        </div>
    )
}

export default Contact

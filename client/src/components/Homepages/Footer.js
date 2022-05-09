import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';
import {DataContext} from '../context/GlobalContext';



const Footer = () => {

const state = useContext(DataContext);
const [isLogin, setIsLogin] = state.isLogin;

const scrollToElement = (element)=>{
scroller.scrollTo(element,{
    duration:800,
    delay:50,
    smooth:true,
    offset:-80
})
}



// clear localstorage- enable login
const logOutSubmit = ()=>{
    localStorage.clear();
    setIsLogin(false);
}


    return (
       <React.Fragment>
           <div className="main-title">
               <h2 className="title contact-title">
                   Contact
               </h2>
           </div>

           <div className="main-contact">
               <div className="contact">
                   <div className="contact-center">
                       {/* links */}
        <div className="contact-center-links">
            <h3>Links</h3>
            <div className="contact-links">
                <li  onClick={()=>scrollToElement('Home')}><Link to='/'>Home</Link></li>
                <li onClick={()=>scrollToElement('About')}><Link to='/'>About</Link></li>
                <li onClick={()=>scrollToElement('Education')}><Link to='/'>Education</Link></li>
                <li onClick={()=>scrollToElement('Experience')}><Link to='/'>Experience</Link></li>
                <li onClick={()=>scrollToElement('Projects')}><Link to='/'>Projects</Link></li>
                <li onClick={()=>scrollToElement('Contact')}
                ><Link to='/'>Contact</Link></li>

          <li className={isLogin?'':'adminLi'}><Link to={isLogin?"/admin/":"/"}>{isLogin?<div className='admin'>Admin</div>:''}</Link></li>

                   
           <li onClick={logOutSubmit}><Link to={isLogin? '/':"/login"}>{isLogin?"Logout":"Login"}</Link></li>

            </div>
        </div>

     {/* media */}
     <div className="contact-center-media">
         <h3>Media</h3>
         <div className="contact-media">
         <li><a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i>Youtube</a></li>
         <li><a href="/#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i>Facebook</a></li>
         <li><a href="/#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i>Linkdedin</a></li>
         </div>
     </div>

   </div>
 </div>
<div className="footer">
    <p>Designed and created by codito 2020</p>
</div>

  </div>
       </React.Fragment>
    )
}

export default Footer

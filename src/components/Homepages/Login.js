import React,{useContext, useState} from 'react'
// import Register from './Register';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {DataContext} from '../context/GlobalContext';

import axios from 'axios';





const Login = () => {


const history = useHistory();
const [user, setUser] = useState({name:'',email:'',password:''})
const state = useContext(DataContext);
const [isLogin, setIsLogin] = state.isLogin;
const [err,setErr] = useState('');

// onchange inputs
const onchangeInput = (e)=>{
const {name, value} = e.target;
setUser({...user, [name]:value})
setErr('');
}


// login submit

const loginSubmit = async (e)=>{
e.preventDefault();

try {
  
const res = await axios.post(`/user/login`, {

email:user.email,
password:user.password

})

setUser({name:'',email:'', password:''});

localStorage.setItem('tokenStore', res.data.token);
setIsLogin(true);

setErr(res.data.msg);

setTimeout(()=>{
    history.push("/admin");
},1000)

console.log(isLogin);

} catch (err) {
    err.response.data.msg && setErr(err.response.data.msg)
}
}






    return (
   <>
   
   <div className="login">
          <div className="main-container">
              <h3>Login for admin</h3></div>  
              <div className="login-center">
         <form onSubmit={loginSubmit}>
               <p>{err}</p>
            <label htmlFor="email">Email</label>
            <input type="email"
             placeholder="import email..." 
             name="email"
             value={user.email}
             onChange={onchangeInput}
             required
            />

          <label htmlFor="password">Password</label>
            <input type="password"
             placeholder="import password..." 
             name="password"
             value={user.password}
             onChange={onchangeInput}
             required
            />

         <div className="login-btn">
             <button type="submit">Login</button>
             <Link to="/"><button >Home</button></Link>
         </div>


                
         </form>
        </div>
    </div>

    {/* register */}
      {/* <Register /> */}
   
   
   </>
    )
}

export default Login

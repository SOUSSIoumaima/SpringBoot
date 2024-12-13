import { useState } from 'react'
import './LoginSignup.css'
import { Link,useNavigate } from "react-router-dom"
export default function LoginSignup(){
    const [id,setId]=useState('');
    const [namep,setNamep]=useState('');
    const [emailadr,setEmailadr]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const navigate=useNavigate();
    const handleAddLoginSignup=()=>{
        if (namep && emailadr && password) {
            const newLoginSignup={
                id,
                namep,
                emailadr,
                password,
        };
        console.log(newLoginSignup);
        
        fetch("http://localhost:8080/loginsignup/add",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newLoginSignup)
        }).then(()=>{
            console.log("new Login signup added")
        })
        navigate('/addproduct');

        } else {
        setError(true);
        console.log("Veuillez remplir tous les champs.");
    }
    };


    return(
        <div className="loginsignup">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    {error && <p className="error-message">Veuillez remplir tous les champs</p>} 
                    <input value={namep} type="text" placeholder="Your Name" onChange={(e)=>setNamep(e.target.value)}/>
                    <input value={emailadr} type="email" placeholder="Email Address" onChange={(e)=>setEmailadr(e.target.value)}/>
                    <input value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={handleAddLoginSignup}>Continue</button>
                <p className="login-login">Already have an account?<Link to='/login'><span>Login</span></Link></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}
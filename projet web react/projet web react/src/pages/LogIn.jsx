import {useNavigate} from "react-router-dom"
import './LogIn.css'
import { useEffect, useState } from "react"


export default function LogIn(){
    const [email,setEmail]=useState("");
    const [passw,setPassw]=useState('');
    
    const [login,setLogin]=useState([]);
    const navigate = useNavigate();
    const [invalidMsg,setInvalidMsg]=useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/loginsignup/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setLogin(result);
        })
    },[])

   const handleTestLogin = () => {
        let isValidUser = false;
      
        login.map((item) => {
            if (item.emailadr === email && item.password === passw) {
                isValidUser = true;
            }
            return null;
        });
        if (isValidUser) {
            navigate('/addproduct');
        } else {
            setInvalidMsg(true);
            console.log("Invalid login");
        }
    };
   

    return(
        <div className="login">
            <div className="log-container">
                <h1>Login</h1>
                <div className="log-fields">
                    <input value={email} type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                    <input value={passw} type="password" placeholder="Password" onChange={(e)=>setPassw(e.target.value)}/>
                </div>
                <button onClick={handleTestLogin}>Continue</button>
                {invalidMsg && <p className="error-message">Invalid login</p>}              
                
            </div>
        </div>
    )
}

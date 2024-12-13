import { useState } from "react"
import logo from "../Assets/logo.png"
import './BarreNavig.css'
import { Link } from "react-router-dom"

export default function BarreNavig (){
    const [menu,setMenu]=useState("home")
    return (
        <div className="navbar">
            <div className="navlogo">
                <img src={logo} alt=""/> 
            </div>
            <ul className="navmenu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="navlogin">
                <Link to='/loginsigneup'><button>login</button></Link>
            </div>
           
        </div>

    )
}
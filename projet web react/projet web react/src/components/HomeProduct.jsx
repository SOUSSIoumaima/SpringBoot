import './HomeProduct.css'
import home from '../Assets/home.png'
export default function HomeProduct(){
    return (
    <div className="homep"> 
    <div className="text1">
        <h2>NEW COLLECTION</h2>
        <div className="text2">
          <p>Beauty is priceless</p>
          <p>but it can be cheaper</p>  
        </div>
        
    </div>
    <div className='homeimg'>
        <img src={home} alt=''/>
    </div>
    </div>  
    )
}
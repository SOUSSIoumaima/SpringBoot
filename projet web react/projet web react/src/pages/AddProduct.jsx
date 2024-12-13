import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'; 
import './AddProduct.css'
export default function AddProduct(){
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [new_price,setNew_price]=useState('');
    const [old_price,setOld_price]=useState('');
    const [image,setImage]=useState('');
    const [error,setError]=useState(false)
   

    const handleAddProduct=()=>{
        if(name && category&&new_price&&old_price && image){
        const newProduct={
            id,
            name,
            category,
            new_price,
            old_price,
            image,
        };
        console.log(newProduct);
        setId('');
        setName('');
        setCategory('');
        setNew_price('');
        setOld_price('');
        setImage('');
        fetch("http://localhost:8080/product/add",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newProduct)
        }).then(()=>{
            console.log("new product added")
        })} else {
            setError(true);
        }

    };
    return(
        <div className="addproduct">
            <div className="addproduct-container">
                <h1>Add a product </h1>
                <div className="addproduct-form">
                {error && <p className="error-message">Veuillez remplir tous les champs</p>}
                    <input value={name} type="text" placeholder="name of product" onChange={(e)=>setName(e.target.value)}/>
                    <select className='box' onChange={(e)=>setCategory(e.target.value)}>
                          <option value="women">women</option>
                          <option value="men">men</option>
                          <option value="kid">kid</option>
                    </select>       
                    <input value={new_price} type="number" placeholder="new price" onChange={(e)=>setNew_price(e.target.value)}/>
                    <input value={old_price} type="number" placeholder="old price" onChange={(e)=>setOld_price(e.target.value)}/>
                    <input value={image} type="text" placeholder="image" onChange={(e)=>setImage(e.target.value)}/>
                    
                </div>
   
              

                <button onClick={handleAddProduct}>Add product</button>
                <Link to='/management' ><button>Management</button></Link>
                

            </div>
        </div>
    )
}
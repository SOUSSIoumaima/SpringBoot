import { useEffect,useState } from "react"


export default function Management(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/product/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setProducts(result);})
    },[]);

    const handleDelete = (productId) => {
        fetch('http://localhost:8080/product/delete/'+productId, {
            method: "DELETE",
            headers:{"Content-type":"application/json"},
           })
        .then(response => {
            if (response.ok) {
               
                setProducts(products.filter(product => product.id !== productId));
            } else {
                console.error('Failed to delete product');
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });
    };

    return(
        <div className="management-container">
            <div className="title">
                <p>inventory management</p>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name of product</th>
                            <th>cathegory</th>
                            <th>new price</th>
                            <th>old price</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.namep}</td>
                                <td>{product.category}</td>
                                <td>{product.new_price}</td>
                                <td>{product.old_price}</td>
                                <td>{product.image}</td>
                                <td><button onClick={()=>handleDelete(product.id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
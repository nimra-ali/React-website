import React,{useEffect,useState} from 'react'

function Api() {
    const API_URL="https://fakestoreapi.com/products"  
    const [Data,setData]=useState([])  
   
useEffect(()=>{
   fetchData()
     },[])
   
   async function fetchData(){
     let t =await fetch(API_URL)
     let data= await t.json();
     setData(data)
     console.log(setData)}

     return <div className="section-center">
     {Data.map((item)=>{
         const {id,title,image,description,price}=item
     return (
        <div className='main-container'>
         <article className="menu-item" key={id}>
     <img src={image} alt={title} className="photo" />
     <div className="item-info">
         <header className='header'>
             <h4>{title.substring(0,13)}</h4> 
             <h4 className="price">${price}</h4>
         </header>
        <p className="item-text">
        <i>{description.substring(0,120)}</i>
        
        </p>
</div>
 </article>
 </div>
     )
 })}
</div>

   }

   export default Api















import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

function Api() {
    const API_URL="https://fakestoreapi.com/products"  
    const [categories , setCategories] = useState([])
    // const [product , setproduct] = useState([])
    const [Data,setData]=useState([])  

   
useEffect(()=>{
   fetchDataa()
     },[])
   
   async function fetchDataa(){
     let t =await fetch(API_URL)
     let data= await t.json();
     setData(data)
     console.log()}
     useEffect(() =>{
         fetchData();
        },[])
        
        const API_CAT = ('https://fakestoreapi.com/products/categories')
async function fetchData(){
    let responce = await fetch(API_CAT);
    let categoriesData = await responce.json();
    setCategories(categoriesData)
}
console.log(categories)
const handlecategory = async (category) => {
    const responcecategry = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const filterproduct = await responcecategry.json();
    setData(filterproduct) 
    console.log(Data)
}
return( 
    <div>
<div>
{categories.map((category =>{
    // console.log(category+22)
    return <button className='btncategory' onClick={()=>handlecategory(category)}>{category}</button>
}))}
</div>
<div className="section-center">
     {Data.map((item)=>{
         const {id,title,image,description,price}=item
     return (
        <div className='main-container'>
            <Link to={`/Api/${item.id}`}>
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
</Link>
 </div>
     )
    })}
    </div>
    </div>)
    
};
export default Api;
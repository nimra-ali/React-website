import React, { useEffect, useState } from 'react'
// import '/App.css'

function Cart() {

  const [saved, setSaved] = useState(false);
  const [products, setProducts] = useState([])
  const [mergedData, setMergedData] = useState([])
  const [itemQuantity , setItemQuantity] = useState(1)
  var total = 0
  const productsApi = 'https://fakestoreapi.com/products'
  const fetchProducts = async () => {
    const res = await fetch(productsApi)
    const productData = await res.json()
    setProducts(productData)
  }
  console.log(products, 'products')

  useEffect(() => {
    fetchProducts()
  }, [])
  useEffect(() => {
    if (products?.length) {
      const getItem = JSON.parse(localStorage.getItem('products')) || []
      console.log(getItem, 'nhh')
      const mergedArray = getItem.map(cardsItem => {
        const product = products.find(product => product.id === cardsItem.productId)
        if (product) {
          return {
            ...product,
            quantity: cardsItem.quantity,
          };
        } else {
          return cardsItem
        }
      });
      console.log(mergedArray, 'hhhh')
      setMergedData(mergedArray)
    }
  }, [products])
  const handleButtonClick = () => {
    setSaved(!saved); 
  };
  const buttonStyle = {
    backgroundColor: saved ? 'red' : 'white',}
    const handlecutClick = (productId) => {
      const updatedMergedData = mergedData.filter((item) => item.id !== productId);
      setMergedData(updatedMergedData);
    };
  return (
    <div className='maincart'>
      <div className='maincart2'>
        <div className='para-1'>
          <h1 className='maincartheading'>MY CARDS</h1>
          <p className='maincartpara'>Choose Your Favourite Thing!</p>
        </div>
        <hr />
        <div className='divv'>
        {mergedData.map((item )=> {
          total += item.price * item.quantity
          // console.log(total+"ok")
          return(
            <div className='quantity'>
<button className='cutbtn'onClick={() => handlecutClick(item.id)}><i class="fa-sharp fa-solid fa-xmark"></i></button>
             <div className='imgdiv'>
           <img src={item.image} alt={item.title} className="photo-3" />
           
              <div className='detailsdiv'>
                <div className='prize'>
                  ${item.price},
                </div>
                <div>
                  Tittle = {item.title},
                </div>
               <div className='quan'>
                Quantity : {item.quantity},
          </div>
               <div className='bbtn'>
              <button className='detailsbtn'><i class="fa-sharp fa-regular fa-heart" style={buttonStyle} onClick={handleButtonClick}></i> {saved ? 'Saved' : 'Save for Later'}</button>
          </div>
          <div className='bttn-+'>
<button onClick={()=>
setItemQuantity(()=>{
  {
    item.quantity--
  }
})
}>
  -
</button>
<span>{item.quantity}</span>
<button onClick={() => setItemQuantity(item.quantity++)}>
  +
</button>
</div>
</div>
</div>
</div>
       ) })}
  <h1 className='sub'>Sub-Total: ${total.toFixed(2)}</h1>
      </div>
      </div>
      <div className='maincart3'>
<h1 className='totol'>Total</h1>
<hr/>
<h2 className='sbtol'>Sub-Total:<h3 className='totl=priss'>${total.toFixed(2)}</h3></h2>
      </div>
    </div>
);
}
export default Cart;
import React, { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import '../App.css'

const Detailpage = () => {
    const { id } = useParams()
    console.log(id)
    const [item, setItem] = useState(null)

    useEffect(() => {
        const fetchItemById = async () => {
            try {
                const responce = await fetch(`https://fakestoreapi.com/products/${id}`)

                const data = await responce.json()
                setItem(data)
                console.log(item)
            }
            catch (error) {
                console.log('error', error)
            }
        }
        
        fetchItemById();
    }, [id]);
    if (!item) {
        return <div className="load">Loading...</div>
    }
    // localStorage.setItem('cards', JSON.stringify([{ productId: 1, quantity: 1 }]))
    const AddToCards = (id) => {
        const cards = JSON.parse(localStorage.getItem('products')) || []
      const existItem = cards.find(product => product.productId === item.id);
      if(existItem){
        existItem.quantity += 1
      }else{
        cards.push({productId: item.id, quantity: 1})
      }
      localStorage.setItem('products' , JSON.stringify(cards))
    }
// debugger;
    return (
        <main className="maiin">
            <div className='main-cntainer'>
                <img src={item.image} alt={item.title} className="photo-2" />
            </div>
            <div className="item-infor">
                <h2 className="tittlee">{item.title}</h2>
                <p className="pro-pricee">${item.price}</p>
                <hr />
                <i className="descrip">{item.description}</i>
                <div className="adbtn">
                <Link to='/card'><button className="addbtn" onClick={() => AddToCards()}>Add to card</button></Link>
                </div>
            </div>
        </main>
    )
}
export default Detailpage;

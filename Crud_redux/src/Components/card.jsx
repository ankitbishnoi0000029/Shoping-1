import { useDispatch } from "react-redux";
import Products from "../Data/product";
import { addtocart } from "../Actions/action";
import { useState } from "react";
import './card.css'
import Cart from "./cart";
function ShoppingCard() {
  const dispatch = useDispatch();
const [added,setadded] = useState(false)
  const [btns,setButtonState] = useState({});
  function cardHendle(item){
    setadded(true)
    setButtonState((prevState) => ({
      ...prevState,
      [item.id]: { text: 'Added', added: true },
    }))
    dispatch(addtocart(item))

    setTimeout(() => {
      setadded(false)
      setButtonState((prevState) => ({
        ...prevState,
        [item.id]: { text: 'Add to Cart', added: false },
      }));
    }, 3000);
  }

  return (
    <section className="container py-3">
      <div className='row'>
        {Products.map((item) => {
          return (
            <div className="card col-2 p-3 m-2" style={{ width: 245 }} key={item.id}>
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="fs-6" >{item.title}</h5>
                <p className="card-text">{item.quantity} in stock</p>
                <div className="justify-content-between">
                  <nav className="text-muted">${item.price}</nav>
                  <button  onClick={() => cardHendle(item)} className="btn btn-primary">
                  {btns[item.id]?.text || 'Add to Cart'} 
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default ShoppingCard;

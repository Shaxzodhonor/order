import "./homeOrderBottom.scss"
import { useContext } from "react";
import { Context } from "../../orderContext/orderContext";
function HomeOrderBottom(){
  const [orderFoods] =useContext(Context);
  return (
    <>
      {orderFoods.length > 0 &&
       <ul className='order-list'>
        { orderFoods.map((food,i) => (
          <li className='order-item' key={i}>
            <span className="title">{food.title}</span>
            <span className="price">{food.price}</span>
          </li>
        )) }
      </ul> }
    </>
  )
}
export default HomeOrderBottom;
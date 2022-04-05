import "./homeContentBottom.scss";
import { Switch, Route, useParams } from 'react-router';
import Foodbox from '../foodBox/foodBox';
import foods from '../../assets/data/food';
import { Context } from "../../orderContext/orderContext";
import { useContext } from "react";

function HomeContentBottom () {
  
  return (
    <div className='home-content-bottom'>
      <div className='food-list-title-wrap'>
        <span>Choose Dishes</span>
        <select >
          <option value="dine">Dine in</option>
        </select>
      </div>
        <Switch>
          <Route path='/:foodType' component={Foodlist} />
        </Switch>
    </div>
  )
}

function Foodlist() {
  const { foodType } = useParams();
  const [orderFoods, setOrderFoods] = useContext(Context);

  
  return(
    <>
      {foods.length > 0 && 
      <ul className='food-list'>
        {foods
        .filter( (food) => food.foodType === foodType)
        .map((food) => (
          <Foodbox  
          onClick={function selectFood() {
          const topildi = foods.find( (foods) =>
            foods.id === food.id)
            
            topildi.number = topildi.number ? topildi.number + 1 : topildi.number = 1;

            setOrderFoods([
              ...new Set([...orderFoods, topildi])
            ])
          }}
          key={food.id}
          foodImg={food.img}
          foodTitle={food.title}
          foodPrice ={food.price}
          foodAvailable={food.available}
          foodType={food.foodType}
        /> 
        ))}
      </ul> }
    </>
  )
}
export default HomeContentBottom;
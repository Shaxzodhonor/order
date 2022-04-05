import foods from '../../assets/data/food';
import './foodBox.scss';


function Foodbox ({ 
  foodImg,
  foodTitle,
  foodPrice,
  foodAvailable,
  foodType,
onClick, }) {
  return(
    <li className='food-card' onClick={onClick}>
      <img className='food-img' src={foodImg} alt="food-img" width='130' />
      <h5>{foodTitle}</h5>
      <span className='food-price'> $ {foodPrice} </span>
      <span className='a'> {foodAvailable} Bowls available </span>
    </li>
  )
}

export default Foodbox;
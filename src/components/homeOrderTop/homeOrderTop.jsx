import './homeOrderTop.scss';

function HomeOrderTop() {

  return (
    <div className='order-top'>
      <h2>Orders #34562</h2>
      <div className='order-button-wrap'>
        <button type='button'>Dine In</button>
        <button type='button'>To Go</button>
        <button type='button'>Delivery</button>
      </div>
      <div className='order-info'>
        <span>Item</span>
        <span>Qty</span>
        <span>Price</span> 
      </div>
    </div>
  )
}

export default HomeOrderTop;
import './home.scss';
import HomeContentTop from '../../components/Header/homeContentTop';
import HomeContentBottom from '../../components/homeContentBottom/homeContentBottom';

import HomeOrderTop from '../../components/homeOrderTop/homeOrderTop';
import HomeOrderBottom from '../../components/homeOrderBottom/homeOrderBottom';


function Home () {

  return (
  <>
    <div className="home"> 
      <div className='home__content' >
        <HomeContentTop />
        <HomeContentBottom />
      </div>
      <div className='home__orders'>
        <HomeOrderTop />
        <HomeOrderBottom />
      </div>
    </div>
  </>
  )
}

export default Home;
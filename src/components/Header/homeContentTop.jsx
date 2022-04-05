import { Link, NavLink } from 'react-router-dom';

import './homeContentTop.scss';

function HomeContentTop() {

  return(
    <header className='content__header header'>
          <div className='header__wrapper'>
            <div className='title-wrap'>
              <h2>Jaegar Resto</h2>
              <span>Tuesday, 2 Feb 2021</span>
            </div>
            <form>
              <input className='search-input' type="search" name="search__food" placeholder='Search for food, coffe, etc..' />
            </form>
          </div>
          <ul className='header__menu'>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/'>Dishes</NavLink>
            </li>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/cold-dishes'>Cold Dishes</NavLink>
            </li>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/soup'>Soup</NavLink>
            </li>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/grill'>Grill</NavLink>
            </li>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/appetizer'>Appetizer</NavLink>
            </li>
            <li>
              <NavLink className='header__link'  activeClassName='header__link--active' to='/dessert'>Dessert</NavLink>
            </li>
          </ul>
        </header>
  )
}

export default HomeContentTop;
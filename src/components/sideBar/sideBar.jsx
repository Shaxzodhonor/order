import "./sideBar.scss";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'
import Home from '../../lib/svgs/home'
import Discount from "../../lib/svgs/discount";
import Dashboard from "../../lib/svgs/dashboard";
import Messages from "../../lib/svgs/messages";
import Notification from "../../lib/svgs/notification"
import Settings from "../../lib/svgs/settings";
import Logout from "../../lib/svgs/logout";

function SideBar () {

  function handleAddClass(evt){
    const AllClass = document.querySelectorAll('.sidebar__item--active');
    
    AllClass.forEach((selectClass) =>{
      selectClass.classList.remove('sidebar__item--active')
    })
    
    evt.currentTarget.classList.add('sidebar__item--active')
  }

  return(
    <>
      <div className='sidebar'>
        <Link className='logo' to='/' >
          <img src={Logo} alt="" />
        </Link>
        <ul className='sidebar__list'>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/'>
              <Home />
            </Link>
          </li>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/discount'>
              <Discount />
            </Link>
          </li>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/dashboard'>
              <Dashboard />
            </Link>
          </li>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/messages'>
              <Messages />
            </Link>
          </li>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/notifications'>
              <Notification />
            </Link>
          </li>
          <li className='sidebar__item' onClick={handleAddClass}>
            <Link className='link' to='/settings'>
              <Settings />
            </Link>
          </li>
        </ul>
        <button className='sidebar__logout'>
          <Logout />
        </button>
      </div>
    </>
  )
}

export default SideBar;
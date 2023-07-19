import React, { useEffect,useState } from 'react'
import './navbar.scss'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link, useNavigate} from 'react-router-dom'
import { getWatchList, removeUser } from '../reducers/Slice';
import {useDispatch, useSelector} from 'react-redux'
import { auth } from '../../Firebase';


function Navbar() {
  const dispatch=useDispatch()
  let navigate = useNavigate();
  const logo=localStorage.getItem('img')
  const [show,handleShow]=useState(false)
  const listlength=useSelector(getWatchList)
  const listenScrollEvent = () => {
    window.scrollY > 40
      ? handleShow(true)
      : handleShow(false)
  }
  const signOut=()=>{
    auth.signOut()
    dispatch(removeUser())
    localStorage.clear();
    navigate('/login')
    
  }
  useEffect(()=>{
window.addEventListener("scroll",listenScrollEvent)
return ()=>{
  window.removeEventListener('scroll',listenScrollEvent)
};
  },[])
  return (
    <div className={`Navbar ${show && 'nav_black'}`}>
      <div className='nav'>
        <div className="logo">
          <Link to='/'>
<img src="/netflix-logo-png-2582.png" alt="logo" />
</Link>
        </div>
        <div className="menus">
        <div className="leftmenu">
          <ul>
           <li> <Link to='/'>Home</Link></li>
            <li><Link to='/search'>TV Shows</Link></li>
            <li><Link to='/search'>Movies</Link></li>
            <li><Link to='/search'>New & Popular</Link></li>
            <li><Link to='/mylist'>My List <span style={{color:'red'}}>{listlength.length>0 ? listlength.length : ''}</span></Link></li>
          </ul>
        </div>
          <div className="rtmenu"><ul>
            <li><Link to='/search'><SearchIcon/></Link></li>
            <li><NotificationsIcon/></li>
            <li onClick={signOut}>
              <div className="loginbtn">
                <img style={{width:'25px',height:'25px',borderRadius:'50%'}}src={logo} alt='logo'/>
              </div>
            </li>
            </ul></div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
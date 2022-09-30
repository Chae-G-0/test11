import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const MainNav = () => {
  return (
    <ul>
        <li> <NavLink to="/Sub01">주요사업</NavLink> </li>
        <li> <NavLink to="/Sub02">부산여행정보</NavLink> </li>
        <li> <NavLink to="/Sub03">알림마당</NavLink> </li>
        <li> <NavLink to="/">공사소개</NavLink> </li>
    </ul>
  )
}

export default MainNav
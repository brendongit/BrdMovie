import React, {useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
  {
    display: 'Início',
    path: '/'
  },
  {
    display: 'Filmes',
    path: '/movie'
  },
  {
    display: 'Séries',
    path: '/tv'
  },  
]

const Header = () => {

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">BrdMovies</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? 'active' : ''}`}>
                <Link to={e.path}>
                  {e.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header;
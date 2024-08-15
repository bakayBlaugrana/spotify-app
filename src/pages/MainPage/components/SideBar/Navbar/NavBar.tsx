import React from 'react'
import { links } from './constants';
import s from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <nav className={s.naviagtion}>
          <ul className={s.nav__list}>
            {links.map(({ text, icon }) => (
              <li className={s.nav__item}>
                <div className={s.nav__itemIcon}>{icon('20px', '20px', '#000')}</div> 
                <p className={s.nav__itemText}>{text}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

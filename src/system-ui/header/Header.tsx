import React from 'react'

import logo from './assets/logo.svg'
import './header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  )
}

export { Header }

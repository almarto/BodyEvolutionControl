import React, { FC } from 'react'
import { compose } from 'redux'
import { WrappedComponentProps } from 'react-with-firebase-auth'

import { withAuthConfiguration } from 'services/fireabase'

import logo from './assets/logo.svg'
import './header.scss'
import { Button } from '@chakra-ui/core'

type HeaderProps = WrappedComponentProps

const Header: FC<HeaderProps> = ({ user, loading, signOut }) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />

      {user && (
        <Button
          onClick={signOut}
          isLoading={loading}
          variantColor="blue"
          size="lg"
        >
          Sign Out
        </Button>
      )}
    </header>
  )
}

const ComposedHeader = compose(withAuthConfiguration)(Header)
export { ComposedHeader as Header }

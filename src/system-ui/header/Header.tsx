import React, { FC, useState } from 'react'
import { compose } from 'redux'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import { Button, Flex, Box } from '@chakra-ui/core'
import { Link } from '@reach/router'

import { withAuthConfiguration } from 'services/fireabase'

import logo from './assets/logo.svg'
import './header.scss'
import { HeaderMenuItem } from './HeaderMenuItem'

type HeaderProps = WrappedComponentProps

const Header: FC<HeaderProps> = ({ user, loading, signOut }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="teal.500"
      className="header"
      borderBottom="1px"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
      </Flex>
      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="#ed8075"
          width="24px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <HeaderMenuItem to="add-measurement">Add Measurement</HeaderMenuItem>
        <HeaderMenuItem to="list-measurements">
          List Measurements
        </HeaderMenuItem>
      </Box>

      {user && (
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            bg="transparent"
            border="1px"
            onClick={signOut}
            isLoading={loading}
          >
            Sign Out
          </Button>
        </Box>
      )}
    </Flex>
  )
}

const ComposedHeader = compose(withAuthConfiguration)(Header)
export { ComposedHeader as Header }

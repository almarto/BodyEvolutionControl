import React, { FC } from 'react'
import { Text } from '@chakra-ui/core'
import { Link } from '@reach/router'

type HeaderMenuItemProps = {
  children: string
  to: string
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ children, to }) => (
  <Link to={to}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
)

export { HeaderMenuItem }

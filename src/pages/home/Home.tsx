import React, { FC } from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import { RouteComponentProps, Link } from '@reach/router'

const Home: FC<RouteComponentProps> = () => (
  <Flex align="center" justifyContent="space-evenly" flexWrap="wrap">
    <Link to="add-measurement">
      <Box
        as="button"
        borderWidth="1px"
        rounded="lg"
        paddingX="20"
        paddingY="10"
      >
        <Text fontSize="xl">Add Measurements</Text>
      </Box>
    </Link>
    <Link to="list-measurements">
      <Box
        as="button"
        borderWidth="1px"
        rounded="lg"
        paddingX="20"
        paddingY="10"
      >
        <Text fontSize="xl">List Measurements</Text>
      </Box>
    </Link>
  </Flex>
)

export { Home }

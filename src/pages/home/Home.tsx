import React, { FC } from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'

const Home: FC = () => (
  <Flex align="center" justifyContent="space-evenly" flexWrap="wrap">
    <Box as="button" borderWidth="1px" rounded="lg" paddingX="20" paddingY="10">
      <Text fontSize="xl">Add Measurements</Text>
    </Box>
    <Box as="button" borderWidth="1px" rounded="lg" paddingX="20" paddingY="10">
      <Text fontSize="xl">List Measurements</Text>
    </Box>
  </Flex>
)

export { Home }

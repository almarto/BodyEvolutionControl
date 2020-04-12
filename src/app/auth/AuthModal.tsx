import React, { FC } from 'react'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import { compose } from 'redux'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Stack,
  Text,
} from '@chakra-ui/core'

import { withAuthConfiguration } from 'services/fireabase'

type AuthModalProps = WrappedComponentProps
const AuthModal: FC<AuthModalProps> = ({ user, loading, signInWithGoogle }) => {
  if (loading || user) return null

  return (
    <Modal isOpen isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody textAlign="center" p="10">
          <Stack spacing={10}>
            <Text fontSize="xl">You must be logged to use the app</Text>

            <Button
              onClick={signInWithGoogle}
              isLoading={loading}
              variantColor="blue"
            >
              Sign in with Google
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const ComposedAuthModal = compose(withAuthConfiguration)(AuthModal)
export { ComposedAuthModal as AuthModal }

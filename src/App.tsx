import React, { FC } from 'react'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

import { withAuthConfiguration } from 'services/fireabase'
import { Layout } from 'system-ui/layout'
import { AuthModal } from 'app/auth'
import { Home } from 'pages/home'

type AppProps = WrappedComponentProps

const App: FC<AppProps> = ({ user }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <AuthModal />
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default withAuthConfiguration(App)

import React, { FC } from 'react'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { Router } from '@reach/router'

import { ListMeasurementsPage } from 'pages/list-measurements'
import { withAuthConfiguration } from 'services/fireabase'
import { AddMeasurementPage } from 'pages/add-measurement'
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
        <Router>
          <Home path="/" />
          <AddMeasurementPage path="add-measurement" />
          <ListMeasurementsPage path="list-measurements" />
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default withAuthConfiguration(App)

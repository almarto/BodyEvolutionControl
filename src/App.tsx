import React, { FC, useState, useCallback } from 'react'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import { format } from 'date-fns'

import { withAuthConfiguration } from 'services/fireabase'
import { measurementsClient } from 'app/measurements/client'
import { Layout } from 'system-ui/layout'

type AppProps = WrappedComponentProps
type AppState = { measurements?: any; error?: any }
const initialState: AppState = {}

const RenderMeasurements = ({ measurements }: { measurements: any }) => {
  return measurements.map((measurement: any) => {
    const { country, state, name, owner } = measurement.data()
    return (
      <div key={name} style={{ border: '1px solid green', padding: '10px 0' }}>
        <p>Country {country}</p>
        <p>State {state}</p>
        <p>Name {name}</p>
        <p>Owner {owner}</p>
      </div>
    )
  })
}

const App: FC<AppProps> = ({ user, loading, signOut, signInWithGoogle }) => {
  const [state, setState] = useState(initialState)

  const getMyMeasurements = useCallback(async () => {
    setState({ error: 'Loading...' })

    const {
      measurements,
      error,
    } = await measurementsClient.getMeasurementsByUserUid(user?.uid)

    setState({ measurements, error })
  }, [user])

  const addMeasurements = useCallback(async () => {
    if (!user) return

    setState({ error: 'Loading...' })
    const randomNum = Math.floor(Math.random() * (100 - 0)) + 0

    const measurement = {
      owner: user?.uid,
      date: format(new Date(), 'dd/MM/yyyy'),
      weight: 60 + randomNum,
    }

    const { generatedId, error } = await measurementsClient.addMeasurement(
      measurement,
    )

    setState({ error: error ? error : `Document added ${generatedId}` })
  }, [user])

  const { measurements, error } = state
  return (
    <Layout>
      <div>
        {user ? (
          <p>
            Hello, {user.displayName} - {user.uid}
          </p>
        ) : (
          <p>Please sign in.</p>
        )}
        {loading ? <p>LOADING</p> : <p>LOADED</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}

        <button onClick={getMyMeasurements}>Get My Measurements</button>
        <button onClick={addMeasurements}>Add Measurements</button>
        {measurements ? (
          <RenderMeasurements measurements={measurements} />
        ) : error ? (
          <p>{JSON.stringify(error)}</p>
        ) : (
          <p>Not fired yet!</p>
        )}
      </div>
    </Layout>
  )
}

export default withAuthConfiguration(App)

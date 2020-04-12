import { firebaseDB } from 'services/fireabase'
import { GetMeasurementType, AddMeasurementType } from 'types'

const getMeasurementsByUserUid: GetMeasurementType = async (userUid) => {
  if (!userUid) return { error: 'You must be logged' }

  try {
    const queryResult = await firebaseDB
      .collection('measurements')
      .where('owner', '==', userUid)
      .get()
    return { measurements: queryResult.docs }
  } catch (error) {
    alert('Error has ocurred')
    console.error('Error getting measurements ', error)
    return { error }
  }
}

const addMeasurement: AddMeasurementType = async (measurement) => {
  try {
    const addResult = await firebaseDB
      .collection('measurements')
      .add(measurement)

    return { generatedId: addResult.id }
  } catch (error) {
    alert('Error has ocurred')
    console.error('Error adding measurements ', error)
    return { error }
  }
}

const measurementsClient = {
  getMeasurementsByUserUid,
  addMeasurement,
}

export { measurementsClient }

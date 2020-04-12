import { User } from 'firebase'

type MeasurementType = {
  owner: string
  date: string
  weight: number
}

type GetResponse = {
  measurements?: QuerySnapshot<Measurement>[]
  error?: Error
}

type AddResponse = {
  generatedId?: string
  error?: Error
}

type GetMeasurementType = (userUid: string | undefined) => Promise<GetResponse>
type AddMeasurementType = (measurement: MeasurementType) => Promise<AddResponse>

export { GetMeasurementType, AddMeasurementType }

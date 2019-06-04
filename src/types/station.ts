import {IEdges} from './gatsby-common'

export interface IStation {
  id: string
  apiId: string
  url: string
  name: string
  img: string
  website: string
}

export type TStations = IEdges<IStation>

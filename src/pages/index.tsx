import React, {useState} from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import {graphql} from 'gatsby'
import StationList from 'components/StationList'
import {TStations, IStation} from '../types/station'
import ActionButton from 'components/ActionButton'
import useAudio from '../hooks/useAudio'

interface IProps {
  data: {
    stations: TStations
  }
}

const IndexPage = ({data}: IProps): JSX.Element => {
  // const [currentStation, setStation] = useState<IStation | null>(null)
  const {play, replay, status, stop} = useAudio()
  const handleSelectStation = (station: IStation): void => {
    // setStation(station)
    play(station.url)
  }
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `typescript`, `react`]} />
      <h1>بسم الله الرحمن الرحيم</h1>
      <StationList
        stations={data.stations}
        handleSelectStation={handleSelectStation}
      />
      <ActionButton status={status} stop={stop} play={replay} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query stations {
    stations: allStation {
      edges {
        node {
          id
          apiId
          url
          name
          img
          website
        }
      }
    }
  }
`

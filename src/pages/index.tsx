import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import {graphql} from 'gatsby'
import StationList from 'components/StationList'
import {Text} from '@rebass/emotion'
import {TStations, IStation} from '../types/station'
import ActionButton from 'components/ActionButton'
import useAudio from '../hooks/useAudio'
import useCurrentPlayingData from '../hooks/useCurrentlyPlayingData'

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
  const currentlyPlayingData = useCurrentPlayingData()
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `typescript`, `react`]} />
      <Text as="h1" textAlign="center">
        بسم الله الرحمن الرحيم
      </Text>
      <StationList
        currentlyPlayingData={currentlyPlayingData}
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

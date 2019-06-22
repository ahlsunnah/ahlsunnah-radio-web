import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import {graphql} from 'gatsby'
import StationList from 'components/StationList'
import {Text, Flex} from '@rebass/emotion'
import {css} from '@emotion/core'
import {TStations, IStation} from '../types/station'
import ActionButton from 'components/ActionButton'
import useAudio from '../hooks/useAudio'
import useCurrentPlayingData from '../hooks/useCurrentlyPlayingData'
import tabletImage from 'images/tablet.svg'

const HEIGHT_BASE = 785
const HEIGHT = `${HEIGHT_BASE}px`
const WIDTH_BASE = HEIGHT_BASE * 0.7474
const WIDTH = `${WIDTH_BASE}px`

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
      <SEO keywords={[`ahlsunnah`, `sunnah`, `quran`, 'radio']} />
      <Text as="h1" textAlign="center">
        بسم الله الرحمن الرحيم
      </Text>
      <Flex
        alignItems={['flex-start', 'flex-start', 'center']}
        justifyContent="center"
        width={[1, 1, WIDTH]}
        p={[0, 0, '56px 39px 56px']}
        css={css`
        @media only screen and (min-width: 768px) {
          height: ${HEIGHT};
          background-image: url("${tabletImage}");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

      `}
      >
        <StationList
          currentlyPlayingData={currentlyPlayingData}
          handleSelectStation={handleSelectStation}
          stations={data.stations}
          widthBase={WIDTH_BASE}
        />
        <ActionButton status={status} stop={stop} play={replay} />
      </Flex>
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

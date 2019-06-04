import React from 'react'
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@material/react-list'
import {TStations, IStation} from 'types/station'
import {Box} from '@rebass/emotion'
import {TCurrentlyPlayingData} from '../hooks/useCurrentlyPlayingData'

const API = process.env.GATSBY_API

interface IProps {
  currentlyPlayingData: TCurrentlyPlayingData
  stations: TStations
  handleSelectStation: (station: IStation) => void
}

const StationList = ({
  currentlyPlayingData,
  handleSelectStation,
  stations,
}: IProps): JSX.Element => {
  return (
    <Box
      as={List}
      radioList
      avatarList
      width="20rem"
      mx="auto"
      singleSelection
      handleSelect={(itemIndex: number): void => {
        const selectedStation = stations.edges[itemIndex].node
        handleSelectStation(selectedStation)
      }}
    >
      {stations.edges.map(
        ({node: {id, apiId, img, name}}): JSX.Element => {
          const currentlyPlayingItem =
            currentlyPlayingData &&
            currentlyPlayingData.find(({id}): boolean => id === apiId)
          const title =
            currentlyPlayingItem &&
            currentlyPlayingItem.title.replace('Unknown -', '')
          return (
            <ListItem key={id}>
              <ListItemGraphic graphic={<img alt="" src={API + img} />} />
              <ListItemText primaryText={name} secondaryText={title} />
            </ListItem>
          )
        },
      )}
    </Box>
  )
}

export default StationList

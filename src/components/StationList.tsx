import React from 'react'
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@material/react-list'
import {TStations, IStation} from 'types/station'
import {Box} from '@rebass/emotion'

const API = process.env.GATSBY_API

interface IProps {
  stations: TStations
  handleSelectStation: (station: IStation) => void
}

const StationList = ({handleSelectStation, stations}: IProps): JSX.Element => {
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
        ({node: {id, img, name}}): JSX.Element => {
          return (
            <ListItem key={id}>
              <ListItemGraphic graphic={<img alt="" src={API + img} />} />
              <ListItemText primaryText={name} secondaryText={undefined} />
            </ListItem>
          )
        },
      )}
    </Box>
  )
}

export default StationList

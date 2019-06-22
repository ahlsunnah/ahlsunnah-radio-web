import React from 'react'
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@material/react-list'
import {TStations, IStation} from 'types/station'
import {css} from '@emotion/core'
import {Box} from '@rebass/emotion'
import {TCurrentlyPlayingData} from '../hooks/useCurrentlyPlayingData'
import ScrollingText from './ScrollingText'
import direction from 'direction'

const API = process.env.GATSBY_API

interface IProps {
  currentlyPlayingData: TCurrentlyPlayingData
  handleSelectStation: (station: IStation) => void
  stations: TStations
  widthBase: number
}

const StationList = ({
  currentlyPlayingData,
  handleSelectStation,
  stations,
  widthBase,
}: IProps): JSX.Element => {
  return (
    <Box
      as={List}
      bg="white"
      width={1}
      py={0}
      radioList
      avatarList
      twoLine
      wrapFocus
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
              <ListItemText
                css={
                  direction(name) === 'rtl'
                    ? css`
                        direction: rtl;
                        outline: 0;
                      `
                    : css`
                        direction: ltr;
                        outline: 0;
                      `
                }
                primaryText={name}
                secondaryText={
                  title && (
                    <ScrollingText width={`${widthBase - 88}px`}>
                      {title}
                    </ScrollingText>
                  )
                }
              />
            </ListItem>
          )
        },
      )}
    </Box>
  )
}

export default StationList

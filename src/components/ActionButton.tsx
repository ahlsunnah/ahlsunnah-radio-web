import React from 'react'
import loadingSvg from 'images/loading.svg'
import playSvg from 'images/play.svg'
import stopSvg from 'images/stop.svg'
import Fab from '@material/react-fab'
import {TAudioStatus, TPlay} from '../hooks/useAudio'

interface IProps {
  status: TAudioStatus
  play: TPlay
  stop: () => void
}

const ActionButton = ({play, status, stop}: IProps): JSX.Element => {
  let iconImg
  let handleClick
  switch (status) {
    case 'stopped':
      iconImg = playSvg
      handleClick = play
      break
    case 'loading':
      iconImg = loadingSvg
      handleClick = stop
      break
    case 'playing':
      iconImg = stopSvg
      handleClick = stop
      break
  }
  return (
    <Fab
      exited={!status}
      onClick={handleClick}
      icon={<img className="material-icons" src={iconImg} />}
    />
  )
}

export default ActionButton

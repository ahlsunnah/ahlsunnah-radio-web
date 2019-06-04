import useInterval from './useInterval'
import fetch from 'unfetch'
import {useState} from 'react'

interface ICurrentlyPlayingItem {
  id: string
  title: string
}

export type TCurrentlyPlayingData = ICurrentlyPlayingItem[] | null

const API = process.env.GATSBY_API

const useCurrentPlayingData = (): TCurrentlyPlayingData => {
  const [currentPlayingData, setCurrentPlayingData] = useState<
    TCurrentlyPlayingData
  >(null)
  useInterval(async (): Promise<void> => {
    const data = await fetch(`${API}/current`).then((res): any => res.json()) // eslint-disable-line @typescript-eslint/no-explicit-any
    setCurrentPlayingData(data)
  }, 15000)

  return currentPlayingData
}

export default useCurrentPlayingData

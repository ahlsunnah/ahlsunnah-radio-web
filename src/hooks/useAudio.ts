import {useCallback, useState, useEffect} from 'react'
import {Howl} from 'howler'

type TCurrentAudio = Howl & {_src?: string} | null

export type TAudioStatus = 'stopped' | 'loading' | 'playing' | null

type TVoidFunction = () => void

interface IUseAudioReturn {
  play: TPlay
  replay: TVoidFunction
  status: TAudioStatus
  stop: TVoidFunction
}

export type TPlay = (audioSrc: string) => void

function useAudio(): IUseAudioReturn {
  const [currentHowl, setCurrentHowl] = useState<TCurrentAudio>(null)
  const [status, setStatus] = useState<TAudioStatus>(null)

  const play = useCallback(
    (audioSrc: string): void => {
      if (currentHowl && currentHowl._src === audioSrc) {
        // click on the currently playing station
        if (status === 'stopped') {
          setStatus('loading')
          currentHowl.play()
        }
        return
      }
      if (currentHowl) {
        currentHowl.unload()
      }
      const howl = new Howl({
        html5: true,
        format: ['mp3', 'aac'],
        src: audioSrc,
        onplay: (): void => setStatus('playing'),
        onloaderror: (): void => setStatus('stopped'),
        onplayerror: (): void => setStatus('stopped'),
      })
      howl.play()
      setCurrentHowl(howl)
      setStatus('loading')
    },
    [currentHowl, status],
  )

  const replay = useCallback((): void => {
    if (currentHowl) {
      setStatus('loading')
      currentHowl.play()
    }
  }, [currentHowl])

  const stop = useCallback((): void => {
    if (currentHowl) {
      // TODO: should we use unload ?
      currentHowl.stop()
      setStatus('stopped')
    }
  }, [currentHowl])

  useEffect((): TVoidFunction => {
    return (): void => {
      if (currentHowl) {
        currentHowl.unload()
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {play, replay, status, stop}
}

export default useAudio

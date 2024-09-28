'use client'

import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState, useEffect } from 'react'

const BackgroundVideo = ({ muted }: { muted: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
    }
  }, [muted])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const MediaComponent = ({ playing }: { playing: boolean }) => {
  const [muted, setMuted] = useState(false)

  const toggleMuted = () => {
    setMuted((prevMuted) => !prevMuted)
  }

  return (
    <>
      {playing && (
        <>
          <BackgroundVideo muted={muted} />
          <button
            onClick={toggleMuted}
            className="fixed top-4 left-4 p-2 px-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-md hover:bg-opacity-10 transition-all"
          >
            <FontAwesomeIcon icon={!muted ? faVolumeUp : faVolumeMute} />
          </button>
        </>
      )}
    </>
  )
}

export default MediaComponent

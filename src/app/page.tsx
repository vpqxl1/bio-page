'use client'

import { useState } from 'react'
import MediaComponent from '@/components/MediaComponent'
import Profile from '@/components/Profile'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  const [playing, setPlaying] = useState(false)

  const handleUserInteraction = () => {
    setPlaying(true)
  }

  return (
    <>
      {!playing && <SplashScreen onStart={handleUserInteraction} />}
      {playing && (
        <>
          <MediaComponent playing={playing} />
          <div className="w-screen h-screen flex justify-center items-center">
            <Profile />
          </div>
        </>
      )}
    </>
  )
}

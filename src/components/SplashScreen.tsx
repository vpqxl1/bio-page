'use client'

import SparklyText from './SparklyText'

const SplashScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center cursor-pointer"
      onClick={onStart}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl bg-clip-text">vpqxl</h1>
        <SparklyText value="click anywhere" classnames="text-lg" />
      </div>
    </div>
  )
}

export default SplashScreen

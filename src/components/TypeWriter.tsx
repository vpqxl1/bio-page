'use client'

import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  speed?: number
  pauseAfterTyping?: number // new prop for pause after typing
  pauseAfterUnwriting?: number // new prop for pause after unwriting
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 100,
  pauseAfterTyping = 500, // default pause after typing
  pauseAfterUnwriting = 500, // default pause after unwriting
}) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    const currentWord = words[index]

    const typingEffect = () => {
      if (pause) return // exit if pause is active

      if (isTyping) {
        if (text.length < currentWord.length) {
          setText((prev) => prev + currentWord.charAt(text.length))
        } else {
          setPause(true)
          setTimeout(() => {
            setPause(false)
            setIsTyping(false)
          }, pauseAfterTyping) // pause after typing
        }
      } else {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1))
        } else {
          setPause(true)
          setTimeout(() => {
            setPause(false)
            setIsTyping(true)
            setIndex((prev) => (prev + 1) % words.length)
          }, pauseAfterUnwriting) // pause after unwriting
        }
      }
    }

    const intervalId = setInterval(typingEffect, speed)
    return () => clearInterval(intervalId)
  }, [
    text.length,
    isTyping,
    index,
    words,
    speed,
    pause,
    pauseAfterTyping,
    pauseAfterUnwriting,
  ])

  return (
    <div>
      {text}
      <Cursor />
    </div>
  )
}

const Cursor: React.FC = () => {
  return <span>|</span>
}

export default Typewriter

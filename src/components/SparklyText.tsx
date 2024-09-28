'use client'

import React, { useEffect, useRef } from 'react'

interface SparklyTextProps {
  value: string
  classnames?: string
}

const SparklyText: React.FC<SparklyTextProps> = ({ value, classnames }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    const createSparkle = () => {
      if (!container) return

      const sparkle = document.createElement('div')
      const size = Math.random() * 6 + 4
      const left = Math.random() * 100
      const duration = Math.random() * 2 + 1

      sparkle.classList.add('absolute', 'bg-white', 'rounded-full', 'opacity-0')
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.left = `${left}%`
      sparkle.style.animation = `sparkle-fade ${duration}s ease-in-out forwards`

      container.appendChild(sparkle)

      setTimeout(() => {
        container.removeChild(sparkle)
      }, duration * 1000)
    }

    const sparkleInterval = setInterval(createSparkle, 200)

    return () => {
      clearInterval(sparkleInterval)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative inline-block ${classnames}`}>
      <span className="z-10">{value}</span>
      <style jsx>{`
        @keyframes sparkle-fade {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default SparklyText

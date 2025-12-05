'use client'

import React, { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  drift: number
  rotation: number
  rotationSpeed: number
  character: string
}

const snowflakeChars = ['❄', '❅', '❆', '✦', '✧', '⋆', '✱', '✲']

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial window size
    setWindowSize({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    })

    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      })
    }

    window.addEventListener('resize', handleResize)

    const createSnowflake = (): Snowflake => ({
      id: Math.random() * 10000,
      x: Math.random() * window.innerWidth,
      y: -20,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.3,
      drift: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      character: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)]
    })

    // Create initial snowflakes across the screen
    const initialSnowflakes = Array.from({ length: 80 }, (_, index) => {
      const flake = createSnowflake()
      flake.y = Math.random() * window.innerHeight // Distribute across screen
      return flake
    })
    setSnowflakes(initialSnowflakes)

    const updateSnowflakes = () => {
      setSnowflakes(prev => {
        const updated = prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.005) * flake.drift + flake.drift * 0.2,
          rotation: flake.rotation + flake.rotationSpeed,
        })).filter(flake => flake.y < window.innerHeight + 50 && flake.x > -50 && flake.x < window.innerWidth + 50)

        // Add new snowflakes from the top
        while (updated.length < 80) {
          updated.push(createSnowflake())
        }

        return updated
      })
    }

    const animationInterval = setInterval(updateSnowflakes, 50)

    return () => {
      clearInterval(animationInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (windowSize.width === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white transition-transform duration-75 ease-linear"
          style={{
            left: flake.x,
            top: flake.y,
            fontSize: `${flake.size * 6}px`,
            opacity: flake.opacity,
            transform: `rotate(${flake.rotation}deg)`,
            textShadow: '0 0 3px rgba(255,255,255,0.3)',
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.2))',
          }}
        >
          {flake.character}
        </div>
      ))}
    </div>
  )
}

export default Snowfall

'use client'

import React, { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    })

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const updateSnowflakes = () => {
      setSnowflakes(prev => 
        prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
        })).filter(flake => flake.y < window.innerHeight)
      )
    }

    const addSnowflake = () => {
      setSnowflakes(prev => [...prev, createSnowflake()])
    }

    const animationInterval = setInterval(updateSnowflakes, 50)
    const addSnowflakeInterval = setInterval(addSnowflake, 300)

    return () => {
      clearInterval(animationInterval)
      clearInterval(addSnowflakeInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white text-lg"
          style={{
            left: flake.x,
            top: flake.y,
            fontSize: `${flake.size * 4}px`,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

export default Snowfall

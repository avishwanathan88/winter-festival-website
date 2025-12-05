'use client'

import React, { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const targetDate = new Date('December 20, 2025 18:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return <div className="h-32" />
  }

  return (
    <div className="text-center py-8">
      <h3 className="text-2xl font-bold text-white mb-6 font-script">
        Next Winter Festival In:
      </h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="glass-effect p-4 text-center">
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-sm text-blue-100 capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer

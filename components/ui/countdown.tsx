'use client'

import React, { useState, useEffect, JSX } from 'react'

interface CountdownProps {
  targetDate: Date
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft: Record<string, number> = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate]) // Depend on targetDate so the countdown updates when the target changes

  const timeComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval]) {
      timeComponents.push(
        <span key={interval} className="text-4xl font-bold mx-2">
          {timeLeft[interval]} {interval}{" "}
        </span>
      )
    }
  })

  return (
    <div className="text-center">
      {timeComponents.length ? (
        timeComponents
      ) : (
        <span className="text-4xl font-bold">Time's up!</span>
      )}
    </div>
  )
}

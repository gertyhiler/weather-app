import { useState } from 'react';
export function useSliderSwitcherController() {
  const [isWeek, setIsWeek] = useState(true)
  const [isHours, setIsHours] = useState(false)

  const setWeekTab = () => {
    setIsWeek(true)
    setIsHours(false)
  }
  const setHoursTab = () => {
    setIsWeek(false)
    setIsHours(true)
  }

  return {
    isWeek,
    isHours,
    setWeekTab,
    setHoursTab
  }
}
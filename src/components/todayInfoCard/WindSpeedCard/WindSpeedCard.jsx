import { BaseTodayInfoCard } from "../BaseTodayInfoCard/";

export function WindSpeedCard ({ value, directionWind }) {
  return (
    <BaseTodayInfoCard {...{headline: "Скорость ветра", value, meaning: "м/с", directionWind}}/>
  )
}
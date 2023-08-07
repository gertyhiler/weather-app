import { BaseTodayInfoCard } from "../BaseTodayInfoCard";

export function VisibilityCard ({value}) {
  return (
    <BaseTodayInfoCard {...{headline: "Видимость", value, meaning: "км"}}/>
  )
}
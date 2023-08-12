import { BaseTodayInfoCard } from "../BaseTodayInfoCard";

export function VisibilityCard ({value}) {
  return (
    <BaseTodayInfoCard {...{headline: "Видимость", value: value.toFixed(), meaning: "км"}}/>
  )
}
import { BaseTodayInfoCard } from "../BaseTodayInfoCard/BaseTodayInfoCard";

export function PressureCard({ value }) {
  return <BaseTodayInfoCard { ...{ headline: "Давление", value, meaning: "мм рт. ст." } }/>
}
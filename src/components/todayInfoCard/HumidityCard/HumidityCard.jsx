import { BaseTodayInfoCard } from '../BaseTodayInfoCard/BaseTodayInfoCard';

export function HumidityCard({ value }) {
	return <BaseTodayInfoCard {...{ headline: 'Влажность', value, humidity: value, meaning: '%' }} />;
}

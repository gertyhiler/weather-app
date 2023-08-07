export function InfoStatusFooter({ thisDay, thisCity }) {
	return (
		<div className="info__status info__status_footer">
			<span className="weather-text info__weather-text-small">Сегодня</span>
			<span className="weather-text info__weather-text-small">{thisDay}</span>
			<span className="weather-text info__weather-text-small info__geo">{thisCity}</span>
		</div>
	);
}

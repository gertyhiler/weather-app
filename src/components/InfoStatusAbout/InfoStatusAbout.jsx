export function InfoStatusAbout({ temperature, weatherStatus, temperatureFeelsLike }) {
	return (
		<div className="info__status info__status_about">
			<span className="temp info__temp">{temperature} °C</span>
			<span className="weather-text info__weather-text">{weatherStatus}</span>
			<span className="weather-text info__weather-text-small">Ощущается как {temperatureFeelsLike} °C</span>
		</div>
	);
}

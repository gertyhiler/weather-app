
import { WeatherStatusImage } from '../WeatherStatusImage';
import './tab-card.css';

export function TabCard({ cardHeadline, temperatureOnDay, temperatureOnNight, status }) {
	return (
		<div className="slider-card">
			<span className="slider-card__text slider-card__text_day">{cardHeadline}</span>
      <WeatherStatusImage {...{icon: status, alt: cardHeadline}}/>
			<div className="slider-card__wrapper">
				<span className="slider-card__text"> {temperatureOnDay}°C </span>
				{temperatureOnNight && <span className="slider-card__text slider-card__text_hint">{temperatureOnNight}°C</span>}
			</div>
		</div>
	);
}

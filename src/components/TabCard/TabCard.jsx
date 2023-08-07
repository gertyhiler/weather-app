import { FoggyImg, StormImg, TemporaryRainImg } from '../weatherStatusImages/'
import './tab-card.css';

export function TabCard({ cardHeadline, temperatureOnDay, temperatureOnNight, status }) {
  const imgEnum = {
    'foggy': <FoggyImg />,
    'storm': <StormImg />,
    'temporary': <TemporaryRainImg />
  }
	return (
		<div className="slider-card">
			<span className="slider-card__text slider-card__text_day">{cardHeadline}</span>
			{imgEnum[status]}
			<div className="slider-card__wrapper">
				<span className="slider-card__text"> {temperatureOnDay}°C </span>
				{temperatureOnNight && <span className="slider-card__text slider-card__text_hint">{temperatureOnNight}°C</span>}
			</div>
		</div>
	);
}

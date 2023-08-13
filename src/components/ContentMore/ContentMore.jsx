import { useEffect } from 'react';
import { useWeatherState } from '../../state/useWeatherState';
import { WindSpeedCard, HumidityCard, VisibilityCard, PressureCard } from '../todayInfoCard';
export function ContentMore() {
	const { isLoading, isError, response, getWeather } = useWeatherState((state) => state);
	useEffect(() => {
		getWeather({ lat: 45.0351532, lon: 38.9772396 });
	}, [getWeather]);
	return (
		<div className="more">
			<ul className="more__list">
				<li className="more__item">
					{isLoading && <WindSpeedCard value={0} directionWind={'СЗ'} />}
					{!isLoading && !isError && response !== null && <WindSpeedCard value={response.wind.speed} directionWind={response.wind.deg} />}
				</li>
				<li className="more__item">
					{isLoading && <HumidityCard value={0} />}
					{!isLoading && !isError && response !== null && <HumidityCard value={response.main.humidity} /> }
				</li>
				<li className="more__item">
					{isLoading && <VisibilityCard value={0} />}
					{!isLoading && !isError && response !== null && <VisibilityCard value={response.visibility / 1000} /> }
				</li>
				<li className="more__item">
					{isLoading && <PressureCard value={0} />}
					{!isLoading && !isError && response !== null && <PressureCard value={(response.main.pressure * 0.75).toFixed()} /> }
				</li>
			</ul>
		</div>
	);
}

import { useEffect } from 'react';
import { useWeatherState } from '../../state/useWeatherState';
import { WindSpeedCard, HumidityCard, VisibilityCard, PressureCard } from '../todayInfoCard';
export function ContentMore() {
	const { isLoading, isError, response, getWeather } = useWeatherState((state) => state);
	console.log('isLoading: ', isLoading);
	useEffect(() => {
		getWeather({ lat: 55.625578, lon: 37.6063916 });
	}, []);
	return (
		<div className="more">
			<ul className="more__list">
				<li className="more__item">
					{isLoading && <WindSpeedCard value={0} directionWind={'СЗ'} />}
					{!isLoading && !isError && response !== null && <WindSpeedCard value={response.wind.speed} directionWind={'СЗ'} />}
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
					{!isLoading && !isError && response !== null && <PressureCard value={response.main.pressure * 0.75} /> }
				</li>
			</ul>
		</div>
	);
}

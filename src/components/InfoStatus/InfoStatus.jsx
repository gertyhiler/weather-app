import { WeatherStatusImage } from "../WeatherStatusImage";

export function InfoStatus({ icon, weatherStatus }) {
	return (
		<div className="info__status">
			<div className="info__container">
        <WeatherStatusImage {...{icon, alt: weatherStatus} }/>
			</div>
		</div>
	);
}

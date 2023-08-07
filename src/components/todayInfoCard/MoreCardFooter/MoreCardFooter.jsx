export function MoreCardFooter({ directionWind }) {
	return (
		<div className="more-card__footer">
			<span className="weather-text more-card__footer-text">{directionWind}</span>
		</div>
	);
}

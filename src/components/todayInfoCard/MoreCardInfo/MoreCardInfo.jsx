export function MoreCardInfo({ value, meaning }) {
	return (
		<div className="more-card__info">
			<span className="temp temp_first-letter">{value}</span>
			<span className={`temp ${meaning === 'мм рт. ст.' ? 'more-card__pressure' : ''}`}>{meaning}</span>
		</div>
	);
}

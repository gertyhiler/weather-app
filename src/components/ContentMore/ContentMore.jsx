import { WindSpeedCard, HumidityCard, VisibilityCard, PressureCard } from '../todayInfoCard'
export function ContentMore({ todayInfoData }) {
	return (
		<div className="more">
			<ul className="more__list">
				<li className="more__item">
          <WindSpeedCard value={todayInfoData.windSpeed} directionWind={todayInfoData.windDirection} />  
        </li>
				<li className="more__item">
          <HumidityCard value={todayInfoData.humidity}/>
        </li>
				<li className="more__item">
          <VisibilityCard value={todayInfoData.visibility}/>
        </li>
				<li className="more__item">
          <PressureCard value={todayInfoData.pressure}/>
        </li>
			</ul>
		</div>
	);
}

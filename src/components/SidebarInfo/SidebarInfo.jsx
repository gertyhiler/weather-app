import { InfoStatus } from '../InfoStatus/InfoStatus';
import { InfoStatusAbout } from '../InfoStatusAbout';
import { InfoStatusFooter } from '../InfoStatusFooter';

export function SidebarInfo({ temperature, weatherStatus, temperatureFeelsLike, thisDay, thisCity, icon }) {
	return (
		<div className="info">
			<InfoStatus {...{ icon, weatherStatus }} />
			<div>
				<InfoStatusAbout {...{ temperature, weatherStatus, temperatureFeelsLike }} />
				<InfoStatusFooter {...{ thisDay, thisCity }} />
			</div>
		</div>
	);
}

import { TabBtn } from '../buttons';
import './switcher.css';

export function SwitcherTab({ isWeek, isHours, setWeekTab, setHoursTab}) {
	return (
		<span className="switcher">
			<TabBtn {...{ text: 'на неделю', isActive: isWeek, onClick: setWeekTab }} />
			<TabBtn {...{ text: 'почасовой', isActive: isHours, onClick: setHoursTab }} />
		</span>
	);
}

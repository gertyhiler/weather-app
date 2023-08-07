import { Slider } from '../Slider/';
import { SwitcherTab } from '../SwitcherTab';
import { ContentHeadline } from '../ContentHeadline';
import * as data from '../../data/slider.json';
import { useSliderSwitcherController } from '../../hooks/useSliderSwitcherController';

export function ContentHeader() {
	const { isWeek, isHours, setWeekTab, setHoursTab, list } = useSliderSwitcherController(data);
	return (
		<>
			<header className="content__header">
				<ContentHeadline As={'h1'} text={'Прогноз'} />
				<SwitcherTab {...{ isWeek, isHours, setWeekTab, setHoursTab }} />
			</header>
			<Slider items={list} />
		</>
	);
}

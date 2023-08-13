import { Slider } from '../Slider/';
import { SwitcherTab } from '../SwitcherTab';
import { ContentHeadline } from '../ContentHeadline';
import { useSliderSwitcherController } from '../../hooks/useSliderSwitcherController';
import { useWeatherState } from '../../state/useWeatherState';
import { Loader } from '../Loader';
import { useEffect, useState } from 'react';

export function ContentHeader() {
	const { isWeek, isHours, setWeekTab, setHoursTab } = useSliderSwitcherController();
	const listResponse = useWeatherState((state) => state.listResponse);
	const [listOnWeek, setListOnWeek] = useState([]);
	useEffect(() => {
		if (listResponse === null || !isWeek) return;
		const filter = (i) => {
			const currentDay = new Date();
			const iterableDay = new Date(i.dt * 1000);

			if (currentDay.getDate() !== iterableDay.getDate()) return true;
			return false;
		};

		setListOnWeek(
			isWeek && listResponse !== null
				? listResponse
						.filter(filter)
						.filter((n, i, a) => n === a.find((m) => m.dt_txt.split(' ')[0] === n.dt_txt.split(' ')[0]))
				: listResponse.filter(filter)
		);
	}, [isWeek, listResponse]);

	return (
		<>
			<header className="content__header">
				<ContentHeadline As={'h1'} text={'Прогноз'} />
				<SwitcherTab {...{ isWeek, isHours, setWeekTab, setHoursTab }} />
			</header>

			{listResponse === null && <Loader />}
			{listResponse !== null && (
				<Slider
          currentTab={isHours}
					items={
						isHours
							? listResponse.filter((i) => {
									const currentDay = new Date();
									const iterableDay = new Date(i.dt * 1000);

									if ((isHours && currentDay.getDate() === iterableDay.getDate()) || (currentDay.getDate() + 1 === iterableDay.getDate())) return true;
									return false;
							  }).slice(0, 8)
							: listOnWeek
					}
				/>
			)}
		</>
	);
}

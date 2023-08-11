import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { Search } from '../../components/Search';
import { SidebarInfo } from '../../components/SidebarInfo';
import './side-bar.css';
import { useWeatherState } from '../../state/useWeatherState';
import { returnFormattedStringThisDay } from '../../utils/returnFormattedStringThisDay';

export function Sidebar() {
	const {response, thisCity} = useWeatherState((state) => state);
	return (
		<aside id="side-bar" className="side-bar">
			<ThemeSwitcher />
			<Search />
			{response === null && (
				<SidebarInfo
					{...{
						temperature: 1,
						weatherStatus: 'Снег',
						temperatureFeelsLike: -3,
						thisDay: 'Вс, 13 мар',
						thisCity: 'Москва',
					}}
				/>
			)}
			{response !== null && (
				<SidebarInfo
					{...{
						temperature: response.main.temp,
						weatherStatus: response.weather[0].description,
						temperatureFeelsLike: response.main.feels_like,
						thisDay: returnFormattedStringThisDay(),
						thisCity: thisCity === null ? response.name : thisCity,
					}}
				/>
			)}
		</aside>
	);
}
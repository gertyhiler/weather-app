import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { Search } from '../../components/Search';
import { SidebarInfo } from '../../components/SidebarInfo';
import './side-bar.css';
import { useWeatherState } from '../../state/useWeatherState';
import { returnFormattedStringThisDay } from '../../utils/returnFormattedStringThisDay';
import { Loader } from '../../components/Loader';

export function Sidebar() {
	const { response, thisCity, isLoading } = useWeatherState((state) => state);
	return (
		<aside id="side-bar" className="side-bar">
			<ThemeSwitcher />
			<Search />
      {isLoading && <div className='info'><Loader/></div> }
      {!isLoading && response !== null && (
				<SidebarInfo
					{...{
						temperature: response.main.temp,
						weatherStatus: response.weather[0].description,
						temperatureFeelsLike: response.main.feels_like,
						thisDay: returnFormattedStringThisDay(),
						thisCity: thisCity === null ? response.name : thisCity,
						icon: response.weather[0].icon,
					}}
				/>
			)}
		</aside>
	);
}

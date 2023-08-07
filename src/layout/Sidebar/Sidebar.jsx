import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { Search } from '../../components/Search';
import { SidebarInfo } from '../../components/SidebarInfo';
import './side-bar.css';

export function Sidebar() {
	return (
		<aside id="side-bar" className="side-bar">
			<ThemeSwitcher />
			<Search />
			<SidebarInfo
				{...{
					temperature: 1,
					weatherStatus: 'Снег',
					temperatureFeelsLike: -3,
					thisDay: 'Вс, 13 мар',
					thisCity: 'Москва',
				}}
			/>
		</aside>
	);
}

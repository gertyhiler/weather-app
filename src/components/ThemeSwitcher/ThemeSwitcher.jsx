import { useThemeSwitcher } from '../../hooks/useThemeSwitcher';
import './theme-switcher.css';
export function ThemeSwitcher() {
	const { isDark, switchThemeHandler } = useThemeSwitcher();

	return (
		<div className="theme-switcher">
			<label className="theme-switcher__wrapper">
				<input type="checkbox" className="theme-switcher__checkbox" checked={isDark} onChange={switchThemeHandler} />
				<span className="theme-switcher__slider"></span>
			</label>
		</div>
	);
}

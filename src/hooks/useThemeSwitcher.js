import { useEffect, useState } from 'react';
export function useThemeSwitcher() {
	const [isDark, setIsDark] = useState(false);
  const body = document.body;
	const switchThemeHandler = (e) => {
		setIsDark(e.target.checked);
	};

	useEffect(() => {
		if (body === null) return;

		if (isDark) {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}
	}, [isDark, body]);

  return {
    isDark,
    switchThemeHandler
  }
}

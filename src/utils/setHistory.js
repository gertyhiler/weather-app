import { getHistory } from './getHistory';

export function setHistory(data) {
	return window.localStorage.setItem(
		'avk-w-app-search-history',
		JSON.stringify(
			[...(getHistory() === null ? [] : getHistory()), ...data].filter(
				(n, i, a) => n === a.find((m) => m.name === n.name)
			).slice(-5)
		)
	);
}

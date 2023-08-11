import { getHistory } from './getHistory';

export function setHistory(data) {
	return window.localStorage.setItem(
		'avk-w-app-search-history',
		JSON.stringify(
			[...(getHistory() === null ? [] : getHistory()), ...data].reverse().filter(
				(n, i, a) => n === a.find((m) => m.name === n.name)
			).reverse().slice(-5)
		)
	);
}

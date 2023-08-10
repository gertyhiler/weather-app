import { create } from 'zustand';
import { useInputSearchState } from '../useInputSearchState';
import { getCitySearch } from '../../$api/getCitySearch';
import { getHistory } from '../../utils/getHistory';
import { setHistory } from '../../utils/setHistory';

export const useSearchState = create((set) => ({
	isLoading: false,
	isError: false,
	response:
	  getHistory() === null
			? []
			: getHistory(),

	getCity: async () => {
		const value = useInputSearchState.getState().value;
		set({ isLoading: true });
		const response = await getCitySearch(value);
		if (response.length === 0) return set({ isLoading: false, isError: true, response: [] });

    setHistory(response)
		set({ isLoading: false, isError: false, response: getHistory() });

	},
}));

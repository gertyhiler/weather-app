import { create } from 'zustand';
import { getCityWeather } from '../../$api/getCityWeather';

export const useWeatherState = create((set, get) => ({
	isLoading: false,
	isError: false,
	response: null,
  thisCity: null,

	getWeather: async (city) => {
		set({ isLoading: true, isError: false });
		try {
			const response = await getCityWeather(city.lat, city.lon);
			set({ isLoading: false, isError: false, response });
			console.log(response);
		} catch (error) {
      console.log(error);
			return set({ isLoading: false, isError: true });
		}
		set({ isLoading: false, isError: false });
	},

  setThisCity: (city) => set({thisCity: city})
}));

import { create } from 'zustand';
import { getCityWeather } from '../../$api/getCityWeather';
import { getCityWeatherOnWeek } from '../../$api/getCityWeatherOnWeek'

export const useWeatherState = create((set, get) => ({
	isLoading: false,
	isError: false,
	response: null,
  listResponse: null,
  thisCity: null,

	getWeather: async (city) => {
		set({ isLoading: true, isError: false });
		try {
			const response = await getCityWeather(city.lat, city.lon);
      const responseOnWeek = await getCityWeatherOnWeek(city.lat, city.lon)
			set({ isLoading: false, isError: false, response, listResponse: responseOnWeek.list });
		
		} catch (error) {
      console.log(error);
			return set({ isLoading: false, isError: true });
		}
		set({ isLoading: false, isError: false });
	},

  setThisCity: (city) => set({thisCity: city})
}));

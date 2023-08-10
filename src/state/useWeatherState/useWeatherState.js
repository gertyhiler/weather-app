import { create } from "zustand";
import { getCityWeather } from "../../$api/getCityWeather";

export const useWeatherState = create((set) => ({
  isLoading: false,
  isError: false,
  response: [],

  getWeather: async (city) => {
    set({isLoading: true, isError: false, response: []})

    try {
      const response = await getCityWeather(city.lat, city.lon)
      set({isLoading: false, isError: false, response})
      console.log(response);
    } catch (error) {
      set({isLoading: false, isError: true, response: []})
    }
    set({isLoading: false, isError: false, response: []})
  }
}))
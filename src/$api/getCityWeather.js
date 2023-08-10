export async function getCityWeather(lat, lon) {
	return await (
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3675fedbc66e6a4ba971fb364098435c&units=metric&lang=ru`
		)
	).json();
}

export function WeatherStatusImage({icon, alt}) {
  return (
    <img
				src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
				alt={alt}
				loading="lazy"
			/>
  )
}
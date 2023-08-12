import { useEffect, useState } from "react";

export function MoreCardFooter({ directionWind }) {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  const orientation = [45, 90, 135, 180, 225, 270, 315, 360];
  const [index, setIndex] = useState(null);
  useEffect(() => {
    for (let i in orientation) {
      if (directionWind - orientation[i] < 0) return setIndex(i);
    }
  }, [])

	return (
		<div className="more-card__footer">
			<span className="weather-text more-card__footer-text" style={{"--deg": `${directionWind + 45}deg`}}>{directions[index]}</span>
		</div>
	);
}

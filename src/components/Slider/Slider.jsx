import { TabCard } from '../TabCard';
import { SliderControls } from '../SliderControls';
import { useSliderState } from '../../state/useSliderState/useSliderState';
import React, { useEffect, useRef } from 'react';
import { returnFormattedStringResponseDay } from '../../utils/returnFormattedStringResponseDay';
import './slider.css';
export function Slider({ items, currentTab }) {
  const sliderRef = useRef(null);
	const { initSlider, translate } = useSliderState((state) => state);
  useEffect(() => {
    if (sliderRef === null) return;
    initSlider(sliderRef.current, 24, 100, items.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef, items])
	return (
		<div className="slider" ref={sliderRef}>
			<div className="slider__wrapper">
				<ul className="slider__list" style={{transform: `translateX(-${translate}px)`}}>
					{items.map((item) => {
						return (
							<li className="slider__item" key={item.dt_txt}>
								<TabCard
									{...{
										cardHeadline: returnFormattedStringResponseDay(item.dt_txt, currentTab),
										temperatureOnDay: item.main.temp_max.toFixed(),
										temperatureOnNight: !currentTab ? item.main.temp_min.toFixed() : false,
										status: item.weather[0].icon,
									}}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			<SliderControls />
		</div>
	);
}
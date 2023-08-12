import { TabCard } from '../TabCard';
import { SliderControls } from '../SliderControls';
import './slider.css';
import { useSliderState } from '../../state/useSliderState/useSliderState';
import { useEffect, useRef } from 'react';
export function Slider({ items }) {
  const sliderRef = useRef(null);
	const { initSlider, translate } = useSliderState((state) => state);

  useEffect(() => {
    if (sliderRef === null) return;
    initSlider(sliderRef.current, 24, 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef, items])
	return (
		<div className="slider" ref={sliderRef}>
			<div className="slider__wrapper">
				<ul className="slider__list" style={{transform: `translateX(-${translate}px)`}}>
					{items.map((item) => {
						if (typeof item.temperatureOnNight === 'undefined') {
							return (
								<li className="slider__item" key={item.headlineCard}>
									<TabCard
										{...{
											cardHeadline: item.headlineCard,
											temperatureOnDay: item.temperatureOnDay,
											status: item.status,
										}}
									/>
								</li>
							);
						}
						return (
							<li className="slider__item" key={item.headlineCard}>
								<TabCard
									{...{
										cardHeadline: item.headlineCard,
										temperatureOnDay: item.temperatureOnDay,
										temperatureOnNight: item.temperatureOnNight,
										status: item.status,
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

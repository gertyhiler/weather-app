import { TabCard } from '../TabCard';
import { SliderControls } from '../SliderControls'
import './slider.css';
export function Slider({ items }) {
	return (
		<div className="slider">
			<div className="slider__wrapper">
				<ul className="slider__list">
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

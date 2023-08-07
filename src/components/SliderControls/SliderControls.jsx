import { SliderBtn } from '../buttons';
import './slider-controls.css';

export function SliderControls() {
	return (
		<div className="slider__controls">
			<SliderBtn {...{ direction: 'prev', isEmpty: true }} />
			<SliderBtn {...{ direction: 'next', isEmpty: false }} />
		</div>
	);
}

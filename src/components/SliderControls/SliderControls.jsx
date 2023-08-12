import { useSliderState } from '../../state/useSliderState/useSliderState';
import { SliderBtn } from '../buttons';
import './slider-controls.css';

export function SliderControls() {
  const { prevBtn, nextBtn, isPrev, isNext } = useSliderState((state) => state)
	return (
		<div className="slider__controls">
			<SliderBtn {...{ direction: 'prev', isEmpty: !isPrev, onClick: prevBtn }} />
			<SliderBtn {...{ direction: 'next', isEmpty: !isNext, onClick: nextBtn }} />
		</div>
	);
}

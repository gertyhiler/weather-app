import { Btn } from '../Btn';
import { SliderBtnSVG } from '../../svg/SliderBtnSVG';
import './slider-buttons.css';

export function SliderBtn({ direction, isEmpty }) {
	return (
		<Btn
			classes={`slider__btn ${
				direction === 'prev' ? 'slider__btn_prev' : direction === 'next' ? 'slider__btn_next' : ''
			} ${isEmpty ? 'slider__btn_empty' : ''}`}
		>
			<SliderBtnSVG />
		</Btn>
	);
}

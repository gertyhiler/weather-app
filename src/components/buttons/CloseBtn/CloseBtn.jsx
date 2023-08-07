import { Btn } from '../Btn';
import { CloseSVG } from '../../svg/CloseSVG';
import './close.css';

export function CloseBtn({ onClick }) {
	return (
		<Btn classes={'close'} onClick={onClick}>
			<CloseSVG />
		</Btn>
	);
}

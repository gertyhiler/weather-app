import { ContentHeadline } from '../ContentHeadline';
import { ContentMore } from '../ContentMore';

export function ContentToday() {
	return (
		<div className="today">
			<div className="today__headline-wrapper">
				<ContentHeadline As={'h2'} text={'Подробно на сегодня'} />
			</div>
			<ContentMore />
		</div>
	);
}

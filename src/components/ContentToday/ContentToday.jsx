import { ContentHeadline } from '../ContentHeadline';
import { ContentMore } from '../ContentMore';
import * as todayInfoData from '../../data/todayInfo.json';

export function ContentToday() {
	return (
		<div className="today">
			<div className="today__headline-wrapper">
				<ContentHeadline As={'h2'} text={'Подробно на сегодня'} />
			</div>
			<ContentMore {...{todayInfoData}}/>
		</div>
	);
}

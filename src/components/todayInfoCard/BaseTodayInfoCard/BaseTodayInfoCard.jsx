import { HeadlineTodayInfoCard } from '../HeadlineTodayInfoCard';
import { MoreCardInfo } from '../MoreCardInfo';
import { MoreCardFooter } from '../MoreCardFooter';
import './more-card.css';
export function BaseTodayInfoCard({ headline, value, meaning, directionWind }) {
	return (
		<div className="more-card">
			<HeadlineTodayInfoCard>{headline}</HeadlineTodayInfoCard>
			<MoreCardInfo {...{ value, meaning }} />
			{directionWind && <MoreCardFooter {...{ directionWind }} />}
		</div>
	);
}

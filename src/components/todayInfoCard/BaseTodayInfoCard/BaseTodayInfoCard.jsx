import { HeadlineTodayInfoCard } from '../HeadlineTodayInfoCard';
import { MoreCardInfo } from '../MoreCardInfo';
import { MoreCardFooter } from '../MoreCardFooter';
import { useWeatherState } from '../../../state/useWeatherState';
import { Loader } from '../../Loader';
import './more-card.css';
import { ProgressBar } from '../ProgressBar';
export function BaseTodayInfoCard({ headline, value, meaning, directionWind, humidity }) {
	const { isLoading, isError } = useWeatherState((state) => state);
	return (
		<div className="more-card">
			{!isLoading && !isError && (
				<>
					<HeadlineTodayInfoCard>{headline}</HeadlineTodayInfoCard>
					<MoreCardInfo {...{ value, meaning }} />
					{(directionWind || directionWind === 0) && <MoreCardFooter {...{ directionWind }} />}
          {humidity && <ProgressBar progress={humidity}/>}
				</>
			)}
			{isLoading && <Loader />}
		</div>
	);
}

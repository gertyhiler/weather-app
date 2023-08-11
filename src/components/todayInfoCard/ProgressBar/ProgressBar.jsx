import './progress.css'
export function ProgressBar({ progress }) {
	return (
		<div className="progress">
			<div className="progress__header">
				<span className="progress__notch">0</span>
				<span className="progress__notch">50</span>
				<span className="progress__notch">100</span>
			</div>
			<div className="progress__wrapper">
				<div className="progress__bg"></div>
				<div className="progress__main" style={{width: `${progress}%`}}></div>
			</div>
      <div className="progress__footer">
        <span className="progress__notch">%</span>
      </div>
		</div>
	);
}

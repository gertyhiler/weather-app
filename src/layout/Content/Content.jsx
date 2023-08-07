import { ContentHeader } from '../../components/ContentHeader/';
import { ContentToday } from '../../components/ContentToday/ContentToday';

import './content.css';
export function Content() {
	return (
		<section id="content" className="content">
			<ContentHeader />
			<ContentToday />
		</section>
	);
}

export function returnFormattedStringThisDay() {
	const thisDate = new Date();
	const week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
	const thisFormattedWeekDay = week[thisDate.getDay()];
	const thisFormattedDay = thisDate.getDate().toString();
	const thisFormattedMont = month[thisDate.getMonth()];

  return `${thisFormattedWeekDay}, ${thisFormattedDay} ${thisFormattedMont}`
}

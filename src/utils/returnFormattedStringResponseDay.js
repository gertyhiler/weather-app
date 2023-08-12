export function returnFormattedStringResponseDay(unixTimestamp, currentTab) {
  if (currentTab) return unixTimestamp.split(' ').pop().slice(0, 5)
  const currentDay = new Date(unixTimestamp);
  const thisDay = new Date()
  if (thisDay.getDate() - 1  === currentDay.getDate()) return "Вчера";
  if (thisDay.getDate() === currentDay.getDate()) return "Сегодня";
  if (thisDay.getDate() + 1 === currentDay.getDate()) return "Завтра";
	const week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
	const thisFormattedWeekDay = week[currentDay.getDay()];
	const thisFormattedDay = currentDay.getDate().toString();
	const thisFormattedMont = month[currentDay.getMonth()];

  return `${thisFormattedWeekDay}, ${thisFormattedDay} ${thisFormattedMont}`

}
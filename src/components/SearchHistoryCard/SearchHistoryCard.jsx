import { useWeatherState } from "../../state/useWeatherState";
import { SearchHistoryText } from "../SearchHistoryText/";
import './history-card.css'

export function SearchHistoryCard({content, onClick}) {
  const {getWeather, setThisCity} = useWeatherState(state => state)
  const submitHandler = () => {
    onClick()
    setThisCity(content.name)
    getWeather(content)
  }

  return (
    <li className="history__card">
      <button className="history__btn" onClick={submitHandler}>
        <SearchHistoryText {...{text: content.name}}/>
      </button>
    </li>
  )
}
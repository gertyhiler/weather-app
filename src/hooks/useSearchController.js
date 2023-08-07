import { useState } from 'react';
export function useSearchController() {
  const [isOpen, setIsOpen] = useState(false);

	const submitBtnHandler = () => {};
	const closeBtnHandler = () => {
    setIsOpen(false)
  }

  const searchCityBtnHandler = () => {
    setIsOpen(true)
  }

  return {
    isOpen,
    submitBtnHandler,
    closeBtnHandler,
    searchCityBtnHandler
  }
}
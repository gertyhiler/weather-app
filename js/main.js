(() => {
	function searchInit() {
		const searchMenu = document.querySelector('#side-bar .search');
		const searchOpenBtn = document.querySelector('#side-bar .btn_search-city');
		const searchCloseBtn = document.querySelector('#side-bar .close');

		const clickHandler = (e) => {
			e.preventDefault();
			if (searchMenu.classList.contains('search_active') && e.target.classList.contains('btn_search-city')) return;
			searchMenu.classList.toggle('search_active');
		};

		searchOpenBtn.addEventListener('click', clickHandler);
		searchCloseBtn.addEventListener('click', clickHandler);
	}

	function switcherTabsInit() {
		const DEFAULT_TAB = 'week';
		const TAB_ATTR = 'data-switcher-tab';
		const BTN_ATTR = 'data-switcher-btn';
		let currentTab = DEFAULT_TAB;

		const tabs = document.querySelectorAll(`[${TAB_ATTR}]`);
		const buttons = document.querySelectorAll(`[${BTN_ATTR}]`);

		const toggleBtn = () => {
			for (btn of buttons) {
				if (btn.getAttribute(BTN_ATTR) !== currentTab) {
					btn.classList.remove('switcher__btn_active');
					continue;
				}
				btn.classList.add('switcher__btn_active');
			}
		};
		const toggleTab = () => {
			tabs.forEach((tab) => {
				if (tab.getAttribute(TAB_ATTR) !== currentTab) return (tab.style = 'display: none');
				tab.style = '';
				toggleBtn();
			});
		};
		toggleTab();

		buttons.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				currentTab = e.target.getAttribute(BTN_ATTR);
				toggleTab();
			});
		});
	}

  function themeSwitcherInit() {
    document.querySelector('.theme-switcher__checkbox').addEventListener("change", (e) => {
      if (e.target.checked) {
        document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./css/root-dark.css">')
        document.body.classList.add('dark')
      } else {
        document.querySelector('link[rel="stylesheet"][href*="dark"]').remove()
        document.body.classList.remove('dark')
      }
    });
    
  }

	document.addEventListener('DOMContentLoaded', () => {
		searchInit();
		switcherTabsInit();
    themeSwitcherInit();
	});
})();

const all_uiComponent_toolCards = document.querySelectorAll('.filter_card')

//–––––
//––––––––––––––––––––––––––––––
//UI–––Menu z index
//––––––––––––––––––––––––––––––

const uiComponent_navList = document.querySelector('#menu_nav-list')

const observer_menuMutation = new MutationObserver(() => {
	const isDisplayed = getComputedStyle(uiComponent_navList).display !== 'none'
	if (isDisplayed) {
		uiComponent_menu.classList.add('menu-opened')
	} else {
		uiComponent_menu.classList.remove('menu-opened')
	}
})

observer_menuMutation.observe(uiComponent_navList, { attributes: true })

//–––––
//––––––––––––––––––––––––––––––
//UI–––cardHover z index
//––––––––––––––––––––––––––––––
if (all_uiComponent_toolCards != undefined) {
	all_uiComponent_toolCards.forEach(toolCard => {
		toolCard.addEventListener('mouseover', function () {
			toolCard.style.zIndex = '5'
		})
		toolCard.addEventListener('mouseleave', function () {
			toolCard.style.zIndex = '0'
		})
	})
}

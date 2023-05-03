'use strict'

//–––––
//––––––––––––––––––––––––––––––
const uiComponent_filterAdditional =
	document.querySelector('.filter_additional')
const uiComponent_filterGrid = document.querySelector('.filter_grid')
const uiComponent_filterSicky = document.querySelector(
	'#ui-component_filter-sticky'
)
const uiComponent_menu = document.querySelector('#ui-component_menu')
const uiComponent_filterCounter = document.querySelector('#filter-counter')
const uiComponent_filterCounterSpan = document.querySelector('#filter-counter')
const all_uiComponent_filterCounters = document.querySelectorAll('.is-counter')
const uiComponent_additionalClearButton = document.querySelector(
	'#filter_additional-buttons-group'
)
const all_uiComponent_additionalClearButton = document.querySelectorAll(
	'[fs-cmsfilter-element="clear"]'
)
const uiComponent_filterPopupButtonOpen = document.querySelector(
	'#filter_category-open-popup'
)
const uiComponent_filterPopupButtonClose = document.querySelector(
	'#is-filter_additional-button-close'
)
const uiComponent_filterCategoryButtons = document.querySelectorAll(
	'[fs-cmsfilter-field]'
)
const uiComponent_filterAncTrigger = document.querySelector(
	'#section_filter-anc-click'
)
const uiComponent_resetAllButton = document.querySelector('#reset-all-button')

//–––––
//––––––––––––––––––––––––––––––
let windowHeight = window.innerHeight

//–––––
//––––––––––––––––––––––––––––––
//UI–––filter param counter
//––––––––––––––––––––––––––––––
function uiChangeCount() {
	setTimeout(function () {
		filterCatalog_height()
		let uiComponent_additionalFilterButtons1 = document.querySelectorAll(
			'#filter_additional .is-active'
		).length
		let uiComponent_additionalFilterButtons2 = document.querySelectorAll(
			'#filter_additional .fs-cmsfilter_active'
		).length

		let counter =
			uiComponent_additionalFilterButtons2 +
			uiComponent_additionalFilterButtons1

		if (counter > 0) {
			all_uiComponent_filterCounters.forEach(counterEl => {
				counterEl.textContent = counter
			})
			uiComponent_filterCounter.classList.remove('hide')
			uiComponent_additionalClearButton.classList.remove('hide')
		} else {
			uiComponent_filterCounter.classList.add('hide')
			uiComponent_additionalClearButton.classList.add('hide')
		}
	}, 150)
}
uiComponent_filterAdditional.addEventListener('click', function () {
	uiChangeCount()
	filterCatalog_height()
})

//–––––
//––––––––––––––––––––––––––––––
//UI–––tags limit in card
//––––––––––––––––––––––––––––––
function uiFunction_tagsLimit() {
	let allCardsTagWrappers = document.querySelectorAll(
		'.filter_card .filter_card-meta-line_tags-wrapper'
	)

	allCardsTagWrappers.forEach(tagWrapper => {
		if (tagWrapper.classList.contains('tags-updated') == false) {
			let allInnerTags = tagWrapper.querySelectorAll('[role="listitem"]')
			allInnerTags.forEach((tag, id) => {
				tag.classList.add('tag-visible')
			})
			if (allInnerTags.length > 4) {
				let currentCountOfTags = allInnerTags.length - 4
				allInnerTags.forEach((tag, id) => {
					if (id > 3) {
						tag.classList.add('hide')
						tag.classList.remove('tag-visible')
					}
				})

				let clonableTag = allInnerTags[0].cloneNode(true)
				let clonableTagInnerElements = clonableTag.querySelectorAll('*')
				clonableTagInnerElements[0].classList.add('text-color-black-6')
				clonableTagInnerElements[0].textContent = '+' + allInnerTags.length
				// clonableTagInnerElements[1].classList.add('hide')
				allInnerTags[3].insertAdjacentElement('afterend', clonableTag)
			}

			let allInnerTagsVisible = tagWrapper.querySelectorAll('.tag-visible')
			if (allInnerTagsVisible.length > 1) {
				let removeComma =
					allInnerTagsVisible[allInnerTagsVisible.length - 1].querySelectorAll(
						'*'
					)
				removeComma = removeComma[1]
				removeComma.classList.add('hide')
			}
			if (allInnerTagsVisible.length == 1) {
				let removeComma = allInnerTagsVisible[0].querySelectorAll('*')
				removeComma = removeComma[1]
				removeComma.classList.add('hide')
			}

			//
			tagWrapper.classList.add('tags-updated')
		}
	})
}

setInterval(uiFunction_tagsLimit, 1500)

//–––––
//––––––––––––––––––––––––––––––
//UI–––filter grid changing
//––––––––––––––––––––––––––––––
const observer_filterGrid = new MutationObserver(() => {
	filterCatalog_height()
	setTimeout(uiChangeCount, 150)
	const isDisplayed =
		getComputedStyle(uiComponent_filterAdditional).display !== 'none'
	if (isDisplayed) {
		uiComponent_filterGrid.classList.add('is-less-columns')
	} else {
		uiComponent_filterGrid.classList.remove('is-less-columns')
	}
})

observer_filterGrid.observe(uiComponent_filterAdditional, { attributes: true })

//–––––
//––––––––––––––––––––––––––––––
//UI–––filterAdditional height changing
//––––––––––––––––––––––––––––––
function filterCatalog_height() {
	if (window.innerWidth >= 768) {
		//for home page
		//for tag-cat page
		//for tag-neuro page
		const uiComponent_filterSickyHeight = uiComponent_filterSicky.offsetHeight
		const uiComponent_menuHeight = uiComponent_menu.offsetHeight
		uiComponent_filterAdditional.style.height = `${
			windowHeight - (uiComponent_filterSickyHeight + uiComponent_menuHeight)
		}px`
	} else {
		uiComponent_filterAdditional.style.height = 'auto'
	}
}

window.addEventListener('resize', filterCatalog_height)

filterCatalog_height()

//–––––
//––––––––––––––––––––––––––––––
//UI–––filter reset, return initial buttons
//––––––––––––––––––––––––––––––
all_uiComponent_additionalClearButton.forEach(button => {
	button.addEventListener('click', function () {
		setTimeout(function () {
			const buttonBigCategory = document.querySelector(
				'#filter-big-category-button-first'
			)
			const buttonSmallCategory = document.querySelector(
				'#filter-category-button-first'
			)

			buttonBigCategory.click()
			buttonSmallCategory.click()
		}, 100)
	})
})

//–––––
//––––––––––––––––––––––––––––––
//UI–––Close button event
//––––––––––––––––––––––––––––––
uiComponent_filterPopupButtonClose.addEventListener('click', function () {
	uiComponent_filterPopupButtonOpen.click()
})

//–––––
//––––––––––––––––––––––––––––––
//UI–––Filter scroll to top
//––––––––––––––––––––––––––––––
uiComponent_filterCategoryButtons.forEach(el => {
	el.addEventListener('click', function () {
		uiComponent_filterAncTrigger.click()
	})
})
uiComponent_resetAllButton.addEventListener('click', function () {
	uiComponent_filterAncTrigger.click()
})

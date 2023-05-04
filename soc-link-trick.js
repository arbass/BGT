const pageSlug = document
	.querySelector('body')
	.getAttribute('current-page-slug')
const allSocLinks = document.querySelectorAll(
	'.soc-src .cl-i_product-content_meta-item-subtitle'
)
const socLinksWrapper = document.querySelector('#soc-links-wrapper')
const socLinksWrapperParent = document.querySelector(
	'#parent_soc-links-wrapper'
)
let currentSlugArrays = new Array()
allSocLinks.forEach(socLinkItem => {
	if (socLinkItem.getAttribute('current-tool-slug') == pageSlug) {
		currentSlugArrays.push(socLinkItem)
	}
})

if (currentSlugArrays.length > 0) {
	socLinksWrapperParent.classList.remove('hide')
	currentSlugArrays.forEach(socLinkItem => {
		socLinksWrapper.appendChild(socLinkItem)
	})
}

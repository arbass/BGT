const allShareUlrElements = document.querySelectorAll('[data-sharer]')
const copyToClipButton = document.querySelector('#share-copy-to-clip')
const copyValueTarget = document.querySelector(
	'[fs-copyclip-element="copy-this"]'
)
allShareUlrElements.forEach(shareEl => {
	shareEl.setAttribute('data-url', window.location)
})

copyValueTarget.textContent = window.location

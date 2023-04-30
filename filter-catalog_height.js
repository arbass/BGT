function filterCatalog_height() {
	if (window.innerWidth >= 768) {
		console.log('работаем!')
	} else {
		console.log('стоп!')
	}
}

window.addEventListener('resize', filterCatalog_height)

filterCatalog_height()

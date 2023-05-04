const relatedArticlesSection = document.querySelector(
	'#product-content_articles-list'
)
const relatedArticlesSectionEmptyState = document.querySelector(
	'#related-empty-state'
)

if (relatedArticlesSectionEmptyState.style.display != 'none') {
	relatedArticlesSection.classList.add('hide')
}

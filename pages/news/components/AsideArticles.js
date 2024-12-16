import Article from './Article.js'

class AsideArticles {
    constructor() {}

    renderArticles(articles) {
        const asideArticles = document.getElementById('asideArticles')
        const articlesMarkup = articles.map(
            ({ title, description, categories, published_at }) => {
                return new Article({
                    title,
                    description,
                    categories,
                    published_at,
                }).render()
            }
        )

        asideArticles.insertAdjacentHTML('beforeend', articlesMarkup.join(''))
    }

    render() {
        return `
          <aside id="asideArticles"></aside>
        `
    }
}

export default AsideArticles

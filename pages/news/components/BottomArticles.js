import Article from './Article.js'

class BottomArticles {
    constructor() {}

    renderArticles(articles) {
        const container = document.getElementById('bottomArticles')

        const articlesMarkup = articles.map((article) =>
            new Article({
                ...article,
                className: 'bottomArticles__article',
            }).render()
        )

        container.insertAdjacentHTML('beforeend', articlesMarkup.join(''))
    }

    render() {
        return `
      <div id="bottomArticles"></div>
    `
    }
}

export default BottomArticles

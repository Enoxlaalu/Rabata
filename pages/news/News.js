import MainArticle from './components/MainArticle/MainArticle.js'
import AsideArticles from './components/AsideArticles.js'
import BottomArticles from './components/BottomArticles.js'

class News {
    constructor() {}

    async render() {
        const main = document.getElementById('main')
        const news = document.createElement('section')
        news.id = 'news'
        news.innerHTML = 'Loading...'

        main.appendChild(news)

        const res = await fetch(
            'https://api.thenewsapi.com/v1/news/all?api_token=i6a07FpOXLnhpb0Yt236CXCxITCd96E4Mney6FSz&search=travel&language=en'
        )
        const { data } = await res.json()

        news.innerHTML = ''

        const articles = [...data, ...data, ...data, ...data]
        const [mainAtricle, ...otherArticles] = articles
        const asideArticles = otherArticles.slice(0, 4)
        const bottomArticles = otherArticles.slice(4)

        const MainArticleComponent = new MainArticle(mainAtricle)

        const AsideArticlesComponent = new AsideArticles()

        const BottomArticlesComponent = new BottomArticles()

        const h1 = `<h1>Latest News</h1>`

        news.insertAdjacentHTML('beforeend', MainArticleComponent.render())
        news.insertAdjacentHTML('beforeend', AsideArticlesComponent.render())
        news.insertAdjacentHTML('beforeend', h1)
        news.insertAdjacentHTML('beforeend', BottomArticlesComponent.render())

        MainArticleComponent.renderButtons()
        AsideArticlesComponent.renderArticles(asideArticles)
        BottomArticlesComponent.renderArticles(bottomArticles)
    }
}

export default News

import Header from './components/Header/Header.js'
import News from './pages/news/News.js'
import Charts from './pages/charts/Charts.js'

new Header().render()

const routes = {
    '/': News,
    '/charts': Charts,
}

;(() => {
    const path = window.location.pathname
    const Page = routes[path.replace('.html', '')]

    new Page().render()
})()

import Button from '../Button/Button.js'

class Header {
    constructor() {}

    renderHeader() {
        const path = window.location.pathname.replace('.html', '')

        const chartsButton = new Button({
            text: 'Charts',
            href: 'charts.html',
            active: path === '/charts',
        })
        const newsButton = new Button({
            text: 'News',
            href: '/',
            active: path === '/',
        })

        return `
                <img src="./assets/images/Logotype.svg" alt="world trends logo" />
                <div class="header__buttonsWrapper">
                    ${chartsButton.render()}
                    ${newsButton.render()}
                </div>
            `
    }

    render() {
        const headerContainer = document.getElementById('header')

        headerContainer.insertAdjacentHTML('beforeend', this.renderHeader())
    }
}

export default Header

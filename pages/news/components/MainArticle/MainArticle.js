import Button from '../../../../components/Button/Button.js'
import Article from '../Article.js'

class MainArticle extends Article {
    constructor(props) {
        super(props)
    }

    renderButtons() {
        const isMobile = window.innerWidth <= 768

        const icon = `../../../../../assets/images/IconArrowRight${
            isMobile ? 'White' : ''
        }.svg`

        const buttonsWrapper = document.querySelector(
            '#mainArticle .mainArticle__buttonsWrapper'
        )

        buttonsWrapper.insertAdjacentHTML(
            'afterbegin',
            new Button({
                text: 'Explore',
                color: isMobile ? 'black' : 'white',
            }).render()
        )
        buttonsWrapper.insertAdjacentHTML(
            'beforeend',
            new Button({
                color: isMobile ? 'black' : 'white',
                icon,
            }).render()
        )
    }

    render() {
        return `
       <article id="mainArticle" class="mainArticle">
        <img src="${this.img}" >
        <h2>${this.title}</h2>
        <div class="mainArticle__buttonsWrapper"></div>
      </article>
  `
    }
}

export default MainArticle

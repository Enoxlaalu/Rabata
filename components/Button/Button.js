class Button {
    constructor({ id, text, color, icon, active, href }) {
        this.id = id
        this.text = text
        this.color = color
        this.icon = icon
        this.active = active
        this.href = href
    }

    render() {
        const button = `
            <button id="${this.id}" tabindex="${
            this.href ? '-1' : '0'
        }" class="button ${this.color ? `button__${this.color}` : ''} ${
            this.icon ? 'button__withIcon' : ''
        } ${this.active ? 'button__active' : ''}">${this.text || ''}${
            this.icon ? `<img src="${this.icon}" alt="button icon" >` : ''
        }</button>
            `

        return this.href ? `<a href="${this.href}">${button}</a>` : button
    }
}

export default Button

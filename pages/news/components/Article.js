class Article {
    constructor({
        title,
        description,
        className,
        image_url,
        categories,
        published_at,
    }) {
        this.title = title
        this.description = description
        this.className = className
        this.img = image_url
        this.categories = categories
        this.published_at = published_at
    }

    getDaysPassed() {
        const date1 = new Date(this.published_at)
        const date2 = new Date()

        const diffTime = date2.getTime() - date1.getTime()
        const diffDays = Math.round(diffTime / (1000 * 3600 * 24))

        return `${diffDays} days ago`
    }

    render() {
        return `
         <article class="news__article ${this.className}">
          ${this.img ? `<img src="${this.img}" alt="${this.title}">` : ''}
          <h2>${this.title}</h2>
          <p>${this.description}</p>
          ${
              this.categories || this.published_at
                  ? `
                    <div class="news__article__bottomSection">
                        <span>${this.getDaysPassed()}</span>
                        <div class="news__article__divider"></div>
                        <span>${this.categories.join(', ')}</span>
                    </div>
                        `
                  : ''
          }
        </article>
    `
    }
}

export default Article

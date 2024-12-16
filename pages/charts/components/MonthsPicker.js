import Button from '../../../components/Button/Button.js'
import Chart from './Chart.js'

class MonthsPicker {
    constructor() {
        this.active = new Date().getMonth()
        this.activeButton = null
    }

    addEvents() {
        const monthsPicker = document.querySelector(
            '#charts .charts__monthPicker'
        )

        monthsPicker.addEventListener('click', (e) => {
            const { id, tagName } = e.target

            if (tagName === 'BUTTON') {
                if (id.includes('monthButton')) {
                    const month = id.split('__')[1]

                    this.active = Number(month)
                    monthsPicker.innerHTML = this.render()

                    new Chart().render(month)
                }
            }
        })
    }

    renderMonths() {
        const currentMonth = new Date().getMonth()

        const formatter = new Intl.DateTimeFormat('en', {
            month: 'short',
            year: '2-digit',
        })

        const arr = Array(12)
            .fill('')
            .map((item, index) => {
                const month = formatter.format(
                    new Date().setMonth(currentMonth + index)
                )

                const active = this.active === currentMonth + index

                const button = new Button({
                    id: `monthButton__${currentMonth + index}`,
                    text: month,
                    active,
                })

                if (active) {
                }

                return button.render()
            })

        return arr.join('')
    }

    render() {
        return `
          <div class="charts__monthPicker">
            ${new Button({
                id: 'monthsPickerLeftButton',
                color: 'black',
                icon: '../../../../../assets/images/IconArrowLeftWhite.svg',
            }).render()}
          <div class="charts__monthPicker__months">${this.renderMonths()}</div>
          ${new Button({
              id: 'monthsPickerRightButton',
              color: 'black',
              icon: '../../../../../assets/images/IconArrowRightWhite.svg',
          }).render()}
          </div>
        `
    }
}

export default MonthsPicker

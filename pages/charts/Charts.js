import Chart from './components/Chart.js'
import MonthChartData from './components/MonthChartData.js'
import MonthsPicker from './components/MonthsPicker.js'

class Charts {
    constructor() {}

    render() {
        const main = document.getElementById('main')
        const charts = document.createElement('section')
        charts.id = 'charts'

        main.innerHTML = ''

        main.appendChild(charts)

        const h1 = `<h1>Charts</h1>`

        const monthChartDataMarkup = new MonthChartData().render()

        const monthsPicker = new MonthsPicker()
        const monthsPickerMarkup = monthsPicker.render()

        charts.insertAdjacentHTML('beforeend', h1)
        charts.insertAdjacentHTML('beforeend', monthChartDataMarkup)
        charts.insertAdjacentHTML('beforeend', monthsPickerMarkup)

        monthsPicker.addEvents()

        const chartDiv = document.createElement('div')
        chartDiv.id = 'chartDiv'
        charts.appendChild(chartDiv)
        new Chart().render(new Date().getMonth())
    }
}

export default Charts

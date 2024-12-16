class Chart {
    constructor() {}

    render(month) {
        // here we can use this month argument to load month data from backend.
        // but in this test project I will use getRandom()

        google.charts.load('current', { packages: ['corechart', 'line'] })
        google.charts.setOnLoadCallback(drawBasic)

        const getRandom = () => Math.floor(Math.random() * 1000)

        const getDaysInMonth = (month, year) =>
            new Array(31)
                .fill('')
                .map((v, i) => {
                    return [
                        new Date(year, month - 1, i + 1),
                        getRandom(),
                        getRandom(),
                    ]
                })
                .filter((v) => {
                    return v[0].getMonth() === (month - 1) % 12
                })

        const days = getDaysInMonth(Number(month) + 1, new Date().getFullYear())

        function drawBasic() {
            var data = new google.visualization.DataTable()
            data.addColumn('date', 'Date')
            data.addColumn('number', 'Chart 1')
            data.addColumn('number', 'Chart 2')

            data.addRows(days)

            const getColor = (variable) => {
                return getComputedStyle(
                    document.documentElement
                ).getPropertyValue(variable)
            }

            const isMobile = window.innerWidth <= 768

            var options = {
                width: isMobile ? 700 : '100%',
                height: 300,
                hAxis: {
                    slantedText: true,
                    slantedTextAngle: 45,
                    format: 'd MMM',
                },
                vAxis: {
                    title: 'TB',
                },
                animation: {
                    duration: 1000,
                    easing: 'out',
                    startup: 'true',
                },
                colors: [getColor('--chart-red'), getColor('--chart-blue')],
                focusTarget: 'category',
                crosshair: { trigger: 'both', orientation: 'vertical' },
            }

            const chartDiv = document.getElementById('chartDiv')
            chartDiv.innerHTML = ''

            var chart = new google.visualization.LineChart(chartDiv)

            chart.draw(data, options)
        }
    }
}

export default Chart

class MonthChartData {
    constructor() {}

    render() {
        const data = [
            {
                text: 'Chart 1',
                value: 136,
                color: 'red',
            },
            {
                text: 'Chart 2',
                value: 42,
                color: 'blue',
            },
        ]

        return `
          <div class="charts__monthChartData">
            ${data.map(({ text, value, color }) => {
                return `
                <div class="charts__monthChartData__item ${
                    color ? `charts__monthChartData__item--${color}` : ''
                }">
                  <span>${text}</span>
                  <b>${value} GB</b>
                </div>
              `
            })}
          </div>
        `
    }
}

export default MonthChartData

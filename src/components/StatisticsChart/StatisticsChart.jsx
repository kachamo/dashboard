import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const StatisticsChart = () => {

    const option = {
        color: ['var(--orange)'],

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(41, 41, 41)"
                    }
                }
            }
        ],
        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(41, 41, 41)",
                        },
                    ]),
                    width: 4
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: true,
                symbolSize: 20,
                color: "rgb(255, 255, 255)",
                borderType: "solid",
                borderColor: "rgb(41, 41, 41)",
                borderWidth: 100,
                
                data: [10000, 20000, 18000, 30000, 15000, 30000, 26000 ]
            }
        ]
    }

    return (
        <ReactECharts option={option}
        />
    )
}

export default StatisticsChart
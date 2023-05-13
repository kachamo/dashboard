import React from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
import { groupNumber, ordersData } from '../../data'
import css from './Additional.module.css'

const Additional = () => {

    const option = {
        color: ["#00d4fa"],
        grid: {
            left: "3%",
            right: "4%",
            bottom: "10%",
            containLabel: true,
            show: false,
        },

        xAxis: [
            {
                type: "time",
                boundaryGap: false,
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                type: "bar",
                smooth: true,
                lineStyle: {
                    color: "rgb(0, 212, 250)",
                },
                showSymbol: false,
                data: [120, 132, 101, 134, 90, 230, 210]
                
            }
        ]
    }

    return (

        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <span>Analytics</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Realtime Views</span>
                <span>{groupNumber(2590)}</span>
            </div>


            <div className={css.orderChart}>
                <ReactECharts option={option}/>
            </div>
        </div>
    
        
    )
}

export default Additional


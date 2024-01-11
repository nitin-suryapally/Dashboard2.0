
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarChart = () => {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        const ctx = chartRef.current;

        if (myChart) {
            myChart.destroy();
        }

        ;
        const data = {
            labels: ['20', '25', '30', '35', '40', '60', '65'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [2, 4, 6, 8, 10, 12, 14, 16],
                    backgroundColor: 'rgb(0, 0, 255 , 1)',
                    borderColor: 'rgb(0, 0, 255 , 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Dataset 2',
                    data: [5, 6, 7, 8, 9, 12, 14, 20],
                    backgroundColor: ' rgb(70, 130, 180, 1)',
                    borderColor: 'rgb(70, 130, 180, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Dataset 3',
                    data: [3, 6, 9 , 12, 15, 18, 21, 24],
                    backgroundColor: ' rgb(125, 249, 255 , 1)',
                    borderColor: 'rgb(125, 249, 255, 1)',
                    borderWidth: 1,
                },
            ],
        };


        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    },
                },
            },
        };

        myChart = new Chart(ctx, config);

        return () => {
            myChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default StackedBarChart;


import React from 'react'
import Chart from 'react-google-charts'

interface pieData {
  data: (string | number)[][]
}

export default function PieChart({ data }: pieData) {
  const options = {
    title: 'Monthly subsriptions',
    pieHole: 0.4,
    colors: ['#0011FF', '#06B300', '#FFC400', '#FF0000', '#C269D6', '#5DC6FF'],
  }

  return (
    <Chart
      width={'500px'}
      height={'500px'}
      chartType="PieChart"
      data={data}
      options={options}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

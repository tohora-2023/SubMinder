import React from 'react'
import Chart from 'react-google-charts'

interface pieData {
  food: number
  entertainment: number
  necessities: number
  bills: number
  productivity: number
  travel: number
}

export default function PieChart({
  food,
  entertainment,
  necessities,
  bills,
  productivity,
  travel,
}: pieData) {
  const options = {
    title: 'Monthly subsriptions in NZD',
    pieHole: 0.4,
    colors: ['#0011FF', '#06B300', '#FFC400', '#FF0000', '#C269D6', '#5DC6FF'],
  }

  const pieData = [
    ['Category', 'Total price'],
    ['Food & Drink', food],
    ['Entertainment', entertainment],
    ['Necessities', necessities],
    ['Bills', bills],
    ['Productivity', productivity],
    ['Travel', travel],
  ]
  return (
    <Chart
      width={'500px'}
      height={'500px'}
      chartType="PieChart"
      data={pieData}
      options={options}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

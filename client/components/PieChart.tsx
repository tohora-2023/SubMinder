import React from 'react'
import { Chart } from 'react-google-charts'

interface pieData {
  food: number | null
  entertainment: number | null
  necessities: number | null
  bills: number | null
  productivity: number | null
  travel: number | null
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
    ['Food & Drink', food ? food : 1],
    ['Entertainment', entertainment ? entertainment : 1],
    ['Necessities', necessities ? necessities : 1],
    ['Bills', bills ? bills : 1],
    ['Productivity', productivity ? productivity : 1],
    ['Travel', travel ? travel : 1],
  ]
  return (
    <>
      <Chart
        width={'500px'}
        height={'500px'}
        chartType="PieChart"
        data={pieData}
        options={options}
        rootProps={{ 'data-testid': '1' }}
      />
    </>
  )
}

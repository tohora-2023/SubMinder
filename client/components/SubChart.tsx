import React from 'react'

interface totals {
  food: number
  entertainment: number
  necessities: number
  bills: number
  productivity: number
  travel: number
  total: number
}

export default function SubChart({
  food,
  entertainment,
  necessities,
  bills,
  productivity,
  travel,
  total,
}: totals) {
  return (
    <div className="ml-auto mr-auto">
      <table>
        <tr>
          <th style={{ width: '100px' }}>Number</th>
          <th style={{ width: '200px' }}>Category</th>
          <th style={{ width: '200px' }}>Amount</th>
        </tr>
        <tr className="p-3">
          <td>1</td>
          <td>
            <span className="material-symbols-outlined text-food">
              restaurant
            </span>
            {'  '}
            Food & Drink
          </td>
          <td>${food}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <span className="material-symbols-outlined text-entertainment">
              live_tv
            </span>
            {'  '}
            Entertainment
          </td>
          <td>${entertainment}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <span className="material-symbols-outlined text-necessities">
              vaccines
            </span>
            {'  '}
            Necessities
          </td>
          <td>${necessities}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <span className="material-symbols-outlined text-bills">
              credit_card
            </span>
            {'  '}
            Bills
          </td>
          <td>${bills}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <span className="material-symbols-outlined text-productivity">
              work
            </span>
            {'  '}
            Productivity
          </td>
          <td>${productivity}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <span className="material-symbols-outlined text-travel">
              directions_bus
            </span>
            {'  '}
            Travel
          </td>
          <td>${travel}</td>
        </tr>
        <tr>
          <td></td>
          <td>Total:</td>
          <td>${total}</td>
        </tr>
      </table>
    </div>
  )
}

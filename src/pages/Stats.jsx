import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
// import api from '../api/axios'  // 실제 API 연결 시 사용

function Stats() {
  const [data, setData] = useState([])

  useEffect(() => {
    // 실제 API 호출 코드
    // const fetchExpenses = async () => {
    //   try {
    //     const res = await api.get('/expenses')
    //     const grouped = groupByCategory(res.data)
    //     setData(grouped)
    //   } catch (error) {
    //     console.error('통계 불러오기 실패:', error)
    //   }
    // }

    // fetchExpenses()

    // ✅ 더미 데이터 사용
    const dummyExpenses = [
      { id: 1, amount: 25000, category: '식비' },
      { id: 2, amount: 12000, category: '교통' },
      { id: 3, amount: 32000, category: '쇼핑' },
      { id: 4, amount: 8000, category: '교통' },
      { id: 5, amount: 15000, category: '식비' },
      { id: 6, amount: 5000, category: '기타' }
    ]

    const grouped = groupByCategory(dummyExpenses)
    setData(grouped)
  }, [])

  const groupByCategory = (expenses) => {
    const map = {}
    expenses.forEach(exp => {
      const category = exp.category || '기타'
      map[category] = (map[category] || 0) + exp.amount
    })
    return Object.keys(map).map(key => ({
      category: key,
      amount: map[key]
    }))
  }

  return (
    <div>
      <h2>지출 통계</h2>
      {data.length === 0 ? (
        <p>통계 데이터를 불러오는 중입니다...</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default Stats

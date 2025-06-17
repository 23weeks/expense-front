import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const res = await api.get('/expenses');
        console.log('지출 목록:', res.data);
        setExpenses(res.data);
      } catch (error) {
        console.log('지출 목록을 불러오는 데 실패했습니다.');
        console.log(error);
      }
    }

    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(expenses.filter(exp => exp.id !== id));
    } catch (error) {
      alert('삭제 실패');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>나의 지출 목록</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map(exp => (
          <li key={exp.id} style={styles.item}>
            <span>{exp.description} - {exp.amount}원</span>
            <button onClick={() => handleDelete(exp.id)} style={styles.deleteButton}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

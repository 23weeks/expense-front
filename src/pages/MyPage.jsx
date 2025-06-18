export default function MyPage() {
  // 추후 유저 정보 조회 API 연동 가능
  return (
    <div style={styles.container}>
      <h2>마이페이지</h2>
      <p>이곳에서 사용자 정보를 확인하거나 변경할 수 있도록 구성할 수 있어요.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
};

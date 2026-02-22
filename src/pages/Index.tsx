import React from 'react';

const Index = () => {
return (
<div style={{
minHeight: '100vh',
width: '100%',
backgroundColor: '#facc15',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
padding: '20px',
fontFamily: 'sans-serif'
}}>
<div style={{
backgroundColor: 'white',
padding: '40px',
borderRadius: '20px',
boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
}}>
<h1 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '20px', fontWeight: 'bold' }}>
The Bees Group 


 배포 테스트 중!
</h1>
<p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
재민이의 진단용 화면입니다. 



<strong>이 노란 화면이 보인다면 설정은 성공입니다!</strong>
</p>
<p style={{ marginTop: '20px', color: '#ef4444', fontWeight: '600' }}>
(만약 이 화면이 뜨면, 원래 있던 컴포넌트에 에러가 있는 거예요!)
</p>
</div>
</div>
);
};

export default Index;
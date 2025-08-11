import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState('loading...');
  const [time, setTime] = useState('loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(d => setHealth(d.status))
      .catch(e => setError(e.message));

    fetch('/api/time')
      .then(r => r.json())
      .then(d => setTime(d.serverTime))
      .catch(e => setError(e.message));
  }, []);

  return (
    <div style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>CRA - Spring boot 연결 테스트</h1>
      <p><strong>Health:</strong> {health}</p>
      <p><strong>Time:</strong> {time}</p>
      {error && <p style={{ color:'crimson' }}>Error : {error}</p>}
      <small>백엔드가 켜져있어야 합니다 (http://localhost:8080)</small>
    </div>
  );
}
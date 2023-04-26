import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';

function Hello() {
  return (
    <div>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import CounterPage from './pages/CounterPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorTestPage from './pages/ErrorTestPage';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/error-test" element={<ErrorTestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HowItWorks from './pages/HowItWorks';
import TrustSafety from './pages/TrustSafety';
import Fees from './pages/Fees';
import Support from './pages/Support';
import StartExchange from './pages/StartExchange';
import ExchangeStatus from './pages/ExchangeStatus';
import MediatorPanel from './pages/MediatorPanel';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/support" element={<Support />} />
        <Route path="/start-exchange" element={<StartExchange />} />
        <Route path="/exchange/:id" element={<ExchangeStatus />} />
        <Route path="/mediator" element={<MediatorPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

import { StoreProvider } from '@app/core/context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { LoginScreen } from './modules/Auth/LoginScreen';
import { EmployeeScreen } from './modules/Employee/EmployeeScreen';
import { UserScreen } from './modules/User/UserScreen';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginScreen />} />
          
          {/* Private Routes (Wrapped in MainLayout by AuthGuard) */}
          <Route element={<AuthGuard />}>
            <Route path="/user" element={<UserScreen />} />
            <Route path="/employees" element={<EmployeeScreen />} />
            
            {/* Thêm menu mới tại đây */}
            {/* <Route path="/inbox" element={<InboxScreen />} /> */}
            <Route path="/settings" element={<div className="p-8">Settings Page Content</div>} />
          </Route>

          {/* Fallback & Redirects */}
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}


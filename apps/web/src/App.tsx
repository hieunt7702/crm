import { StoreProvider } from '@app/core/context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { ThemeProvider } from './context/ThemeContext';
import { LoginScreen } from './modules/Auth/LoginScreen';
import { EmployeeScreen } from './modules/Employee/EmployeeScreen';
import { ProductScreen } from './modules/Product/ProductScreen';
import { UserScreen } from './modules/User/UserScreen';

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />

            <Route element={<AuthGuard />}>
              <Route path="/user" element={<UserScreen />} />
              <Route path="/employees" element={<EmployeeScreen />} />
              <Route path="/products" element={<ProductScreen />} />
              <Route path="/settings" element={<div className="p-8">Settings Page Content</div>} />
            </Route>

            <Route path="/" element={<Navigate to="/employees" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}


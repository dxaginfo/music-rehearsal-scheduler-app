import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import BandList from './pages/bands/BandList';
import BandDetails from './pages/bands/BandDetails';
import RehearsalSchedule from './pages/rehearsals/RehearsalSchedule';
import UserAvailability from './pages/availability/UserAvailability';
import UserProfile from './pages/profile/UserProfile';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  // Check for token and load user on app startup
  useEffect(() => {
    // Will implement checkAuthStatus action
  }, [dispatch]);

  if (loading) {
    // Implement loading spinner
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="bands" element={<ProtectedRoute><BandList /></ProtectedRoute>} />
        <Route path="bands/:bandId" element={<ProtectedRoute><BandDetails /></ProtectedRoute>} />
        <Route path="rehearsals" element={<ProtectedRoute><RehearsalSchedule /></ProtectedRoute>} />
        <Route path="availability" element={<ProtectedRoute><UserAvailability /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

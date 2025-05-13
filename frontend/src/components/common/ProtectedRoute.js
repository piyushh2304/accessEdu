import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '../../services/api';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const user = authService.getCurrentUser();
  
  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // User doesn't have the required role
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children;
};

export default ProtectedRoute;

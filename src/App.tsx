import React from 'react';
import { Outlet } from '@tanstack/react-location';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Outlet />
    </div>
  );
}

export default App;
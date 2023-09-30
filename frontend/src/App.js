```javascript
import React from 'react';
import Dashboard from './components/Dashboard';
import CustomerProfile from './components/CustomerProfile';
import TaskManagement from './components/TaskManagement';
import CommunicationCenter from './components/CommunicationCenter';
import ReportsAnalytics from './components/ReportsAnalytics';
import Integration from './components/Integration';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <CustomerProfile />
      <TaskManagement />
      <CommunicationCenter />
      <ReportsAnalytics />
      <Integration />
    </div>
  );
}

export default App;
```
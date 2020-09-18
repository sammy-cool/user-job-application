import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import AdminDashBoard from './AdminDashBoard'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1> User Job Application </h1>

      
    <Route path="/" component={ ApplicationForm } exact={true} />
    <Route path="/admin" component={ AdminDashBoard } />

    </div>
    </BrowserRouter>
  );
}

export default App;

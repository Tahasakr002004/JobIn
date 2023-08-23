// import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth.js';
import { getUserAuth } from './redux/actions/actions-index';

function App (props) {
   useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
   
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
              <RequireAuth>
                <Header />
              <Home />
            
              </RequireAuth>
            } />
          </Routes>
        </Router>
      </div>
  
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
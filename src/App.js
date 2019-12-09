import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import Layout from './pages/home/Layout.jsx'

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>

    </Provider>
  );
}

export default App;

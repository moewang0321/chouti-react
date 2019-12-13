import React from 'react';
import './App.css';
import './pages/detail/detailComment.css'
import { Provider } from 'react-redux'
import store from './store/index'
import Layout from './pages/home/Layout.jsx'
import Detail from './pages/detail/Detail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>


          <Route
            path="/link"
            render={
              () => (
                <Detail></Detail>
              )
            }
          />

          <Route
            path="/"
            render={
              () => (
                <Layout></Layout>
              )
            }
          />
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;

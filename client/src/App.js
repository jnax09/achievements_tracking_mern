import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import AchievementList from './components/AchievementList';
import store from './store'
import AchievementModal from './components/AchievementModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <AchievementModal />
            <AchievementList />
          </Container>
       </div>
      </Provider>
    );
  }
}

export default App;

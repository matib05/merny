import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from '../node_modules/reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal 
              buttonLabel="Add Shopping Item"
            />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import ImageGrid from './components/ImageGrid';

import { Provider } from 'react-redux'
import configureStore from './store'
import { Fragment } from 'react';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
        <Fragment>
          <Header />
          <ImageGrid />
        </Fragment>
    </Provider>
  );
}

export default App;
